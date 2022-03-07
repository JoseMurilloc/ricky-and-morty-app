import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, TouchableOpacity, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../../components/Spinner';
// import {useFavorites} from '../../contexts/favorites';
import theme from '../../global/styles/theme';
import {Navigation} from '../../routes/typesRoutes';
import {api} from '../../services/axios';
import {addFavoriteCharacters} from '../../store/modules/favorites/actions';
import {State} from '../../store/rootReducer';
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
  // const {favorites, toggleFavorites} = useFavorites();

  const favorite = useSelector((state: State) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {!character ? (
          <Spinner />
        ) : (
          <>
            <Header>
              <ImageCharacter>
                <CharacterPhoto
                  source={{
                    uri: character.image,
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
                <TouchableOpacity
                  onPress={() => dispatch(addFavoriteCharacters(character.id))}>
                  <Heart
                    name={
                      favorite.characters.includes(character.id)
                        ? 'heart'
                        : 'hearto'
                    }
                    size={24}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
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

            <ButtonSearchGoogle
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com.br/search?q=${character?.name}`,
                )
              }>
              <ButtonSearchGoogleText>Buscar no Google</ButtonSearchGoogleText>
            </ButtonSearchGoogle>
          </>
        )}
      </Container>
    </>
  );
}
