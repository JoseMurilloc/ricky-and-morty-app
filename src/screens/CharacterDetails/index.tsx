import React from 'react';
import {StatusBar} from 'react-native';
import theme from '../../global/styles/theme';
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

export function CharacterDetails() {
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
                uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              }}
            />

            <CircleIconBack>
              <ArrowBack name="arrowleft" size={21} color="#ffffff" />
            </CircleIconBack>
          </ImageCharacter>
        </Header>

        <ContentInfo>
          <HeaderSection>
            <NameCharacter>Rick Sanchez</NameCharacter>
            <Heart name="heart" size={24} color={theme.colors.primary} />
          </HeaderSection>

          <AboutSection>
            <WrapperInfo>
              <Title>Species:</Title>
              <Info>Human</Info>
            </WrapperInfo>

            <WrapperInfo>
              <Title>Gender:</Title>
              <Info>Human</Info>
            </WrapperInfo>
          </AboutSection>

          <LocationSection>
            <Title>Location</Title>
            <Info>Earth (Replacement Dimension)</Info>
          </LocationSection>

          <AboutSection>
            <WrapperInfo>
              <Title>Origin:</Title>
              <Info>Earth (C-137)</Info>
            </WrapperInfo>

            <WrapperInfo>
              <Title>Status:</Title>
              <Status status="alive">Alive</Status>
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
