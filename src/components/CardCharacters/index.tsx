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
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../routes/typesRoutes';

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
  const navigation = useNavigation<Navigation>();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('CharacterDetails', {id: character.id})
      }>
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
    </TouchableWithoutFeedback>
  );
}
