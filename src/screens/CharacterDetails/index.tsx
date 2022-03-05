import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import theme from '../../global/styles/theme';
import {Navigation} from '../../routes/typesRoutes';
import {api} from '../../services/axios';
import {
  Container,
  Header,
  ImageCharacter,
  CharacterPhoto,
  ArrowBack,
  CircleIconBack,
  Heart,
  ContentInfo,
  HeaderSection,
  NameCharacter,
  AboutSection,
  LocationSection,
  Info,
  Title,
  WrapperInfo,
  Status,
  ButtonSearchGoogle,
  ButtonSearchGoogleText,
} from './styles';

type Character = {
  id: number;
  name: string;
  status: string;
  statusFormatted: 'alive' | 'dead' | 'unknown';
  image: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
};

type Params = {id: number};

export function CharacterDetails() {
  const route = useRoute();
  const navigation = useNavigation<Navigation>();

  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    fetchCharacter();
  }, []);

  async function fetchCharacter() {
    const {id} = route.params as Params;

    try {
      const response = await api.get(`/character/${id}`);
      setCharacter({
        ...response.data,
        statusFormatted: response.data.status.toLowerCase(),
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Header>
          <ImageCharacter>
            <CharacterPhoto
              source={{
                uri: character?.image,
              }}
            />

            <CircleIconBack onPress={() => navigation.goBack()}>
              <ArrowBack name="arrowleft" size={21} color="#ffffff" />
            </CircleIconBack>
          </ImageCharacter>
        </Header>

        <ContentInfo>
          <HeaderSection>
            <NameCharacter>{character?.name}</NameCharacter>
            <Heart name="hearto" size={24} color={theme.colors.primary} />
          </HeaderSection>

          <AboutSection>
            <WrapperInfo>
              <Title>Species:</Title>
              <Info>{character?.species}</Info>
            </WrapperInfo>

            <WrapperInfo>
              <Title>Gender:</Title>
              <Info>{character?.gender}</Info>
            </WrapperInfo>
          </AboutSection>

          <LocationSection>
            <Title>Location</Title>
            <Info>Earth (Replacement Dimension)</Info>
          </LocationSection>

          <AboutSection>
            <WrapperInfo>
              <Title>Origin:</Title>
              <Info>{character?.origin.name}</Info>
            </WrapperInfo>

            <WrapperInfo>
              <Title>Status:</Title>
              <Status status={character?.statusFormatted}>
                {character?.status}
              </Status>
            </WrapperInfo>
          </AboutSection>
        </ContentInfo>

        <ButtonSearchGoogle>
          <ButtonSearchGoogleText>Buscar no Google</ButtonSearchGoogleText>
        </ButtonSearchGoogle>
      </Container>
    </>
  );
}
