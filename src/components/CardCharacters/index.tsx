import React from 'react';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/styles/theme';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../routes/typesRoutes';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../store/rootReducer';
import {addFavoriteCharacters} from '../../store/modules/favorites/actions';
import {Props} from './types';

export function CardCharacters({character}: Props) {
  const navigation = useNavigation<Navigation>();

  const favorites = useSelector((state: State) => state.favorites);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('CharacterDetails', {id: character.id})
      }>
      <S.Container>
        <S.ImageCharacter>
          <S.CharacterPhoto
            source={{
              uri: character.image,
            }}
          />
        </S.ImageCharacter>
        <S.ContentCharacter>
          <S.ContentCharacterInfo>
            <S.NameCharacter numberOfLines={1} testID="name-character">
              {character.name}
            </S.NameCharacter>

            <S.Title>Species:</S.Title>
            <S.Specie>{character.species}</S.Specie>

            <S.Title>Origin:</S.Title>
            <S.Origin numberOfLines={1}>{character.origin.name}</S.Origin>
          </S.ContentCharacterInfo>
          <S.WrapperButtonFavorites>
            <S.ButtonFavorite
              testID="favorite-button"
              onPress={() => dispatch(addFavoriteCharacters(character.id))}>
              <Icon
                testID="favorite-button-icon"
                name={
                  favorites.characters.includes(character.id)
                    ? 'heart'
                    : 'heart-o'
                }
                size={24}
                color={theme.colors.primary}
              />
            </S.ButtonFavorite>
          </S.WrapperButtonFavorites>
        </S.ContentCharacter>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
