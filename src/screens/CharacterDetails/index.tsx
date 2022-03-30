import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar, TouchableOpacity, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../../components/Spinner';
import theme from '../../global/styles/theme';
import {Navigation} from '../../routes/typesRoutes';
import {api} from '../../services/axios';
import {addFavoriteCharacters} from '../../store/modules/favorites/actions';
import {State} from '../../store/rootReducer';
import * as S from './styles';

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
      <S.Container>
        {!character ? (
          <Spinner />
        ) : (
          <>
            <S.Header>
              <S.ImageCharacter>
                <S.CharacterPhoto
                  source={{
                    uri: character.image,
                  }}
                />

                <S.CircleIconBack onPress={() => navigation.goBack()}>
                  <S.ArrowBack name="arrowleft" size={21} color="#ffffff" />
                </S.CircleIconBack>
              </S.ImageCharacter>
            </S.Header>

            <S.ContentInfo>
              <S.HeaderSection>
                <S.NameCharacter>{character?.name}</S.NameCharacter>
                <TouchableOpacity
                  onPress={() => dispatch(addFavoriteCharacters(character.id))}>
                  <S.Heart
                    name={
                      favorite.characters.includes(character.id)
                        ? 'heart'
                        : 'hearto'
                    }
                    size={24}
                    color={theme.colors.primary}
                  />
                </TouchableOpacity>
              </S.HeaderSection>

              <S.AboutSection>
                <S.WrapperInfo>
                  <S.Title>Species:</S.Title>
                  <S.Info>{character?.species}</S.Info>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.Title>Gender:</S.Title>
                  <S.Info>{character?.gender}</S.Info>
                </S.WrapperInfo>
              </S.AboutSection>

              <S.LocationSection>
                <S.Title>Location</S.Title>
                <S.Info>Earth (Replacement Dimension)</S.Info>
              </S.LocationSection>

              <S.AboutSection>
                <S.WrapperInfo>
                  <S.Title>Origin:</S.Title>
                  <S.Info>{character?.origin.name}</S.Info>
                </S.WrapperInfo>

                <S.WrapperInfo>
                  <S.Title>Status:</S.Title>
                  <S.Status status={character?.statusFormatted}>
                    {character?.status}
                  </S.Status>
                </S.WrapperInfo>
              </S.AboutSection>
            </S.ContentInfo>

            <S.ButtonSearchGoogle
              onPress={() =>
                Linking.openURL(
                  `https://www.google.com.br/search?q=Rick and Morty ${character?.name}`,
                )
              }>
              <S.ButtonSearchGoogleText>
                Buscar no Google
              </S.ButtonSearchGoogleText>
            </S.ButtonSearchGoogle>
          </>
        )}
      </S.Container>
    </>
  );
}
