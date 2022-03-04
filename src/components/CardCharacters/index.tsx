import React from 'react';
import {
  Container,
  ImageCharacter,
  CharacterPhoto,
  ContentCharacter,
  NameCharacter,
  Title,
  Specie,
  Origin,
  Heart,
} from './styles';
import theme from '../../global/styles/theme';

export function CardCharacters() {
  return (
    <Container>
      <ImageCharacter>
        <CharacterPhoto
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
      </ImageCharacter>
      <ContentCharacter>
        <NameCharacter>Rick Sanchez</NameCharacter>

        <Title>Species:</Title>
        <Specie>Human</Specie>

        <Title>Origin:</Title>
        <Origin>Earth (C-137)</Origin>

        <Heart name="hearto" size={16} color={theme.colors.primary} />
      </ContentCharacter>
    </Container>
  );
}
