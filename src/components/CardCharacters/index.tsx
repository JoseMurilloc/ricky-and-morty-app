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
// import {useFavorites} from '../../contexts/favorites';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../store/rootReducer';
import {addFavoriteCharacters} from '../../store/modules/favorites/actions';

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
  // const {favorites, toggleFavorites} = useFavorites();

  const favorites = useSelector((state: State) => state.favorites);
  const dispatch = useDispatch();

  const formattedSizeName = (name: string) => name.slice(0, 17).concat('...');

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
          <NameCharacter testID="name-character">
            {character.name.length > 22
              ? formattedSizeName(character.name)
              : character.name}
          </NameCharacter>

          <Title>Species:</Title>
          <Specie>{character.species}</Specie>

          <Title>Origin:</Title>
          <Origin>
            {character.origin.name.length > 24
              ? formattedSizeName(character.origin.name)
              : character.origin.name}
          </Origin>

          <ButtonFavorite
            testID="favorite-button"
            onPress={() => dispatch(addFavoriteCharacters(character.id))}>
            <Icon
              testID="favorite-button-icon"
              name={
                favorites.characters.includes(character.id) ? 'heart' : 'hearto'
              }
              size={24}
              color={theme.colors.primary}
            />
          </ButtonFavorite>
        </ContentCharacter>
      </Container>
    </TouchableWithoutFeedback>
  );
}
