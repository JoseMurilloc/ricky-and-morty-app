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
  ButtonFavorite,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../../global/styles/theme';

type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
  origin: {
    name: string;
  };
};

type Props = {
  character: Character;
};

export function CardCharacters({character}: Props) {
  return (
    <Container>
      <ImageCharacter>
        <CharacterPhoto
          source={{
            uri: character.image,
          }}
        />
      </ImageCharacter>
      <ContentCharacter>
        <NameCharacter>{character.name}</NameCharacter>

        <Title>Species:</Title>
        <Specie>{character.species}</Specie>

        <Title>Origin:</Title>
        <Origin>{character.origin.name}</Origin>

        <ButtonFavorite>
          <Icon name="hearto" size={16} color={theme.colors.primary} />
        </ButtonFavorite>
      </ContentCharacter>
    </Container>
  );
}
