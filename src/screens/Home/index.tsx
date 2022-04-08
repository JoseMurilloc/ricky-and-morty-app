import React, {useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {CardCharacters} from '../../components/CardCharacters';

import {InputSearch} from '../../components/InputSearch';
import {Spinner} from '../../components/Spinner';
import {useCharacters} from '../../hooks/useCharacters';
import * as S from './styles';

export function Home() {
  const [search, setSearch] = useState('');
  const [loadSearch, setLoadSearch] = useState(false);

  const {
    data,
    refetch,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useCharacters({key: 'characters', search});

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  async function handleSubmitFilter() {
    setLoadSearch(true);
    await refetch();
    setLoadSearch(false);
  }

  const characters = data?.pages.map(page => page.results).flat();

  const countCurrentCharacters = data?.pages.reduce<number>(
    (acc, page) => (acc += page.results.length),
    0,
  );

  const handleCountCharacters = () => {
    if (!countCurrentCharacters) {
      return 'Nenhum personagem';
    }

    if (countCurrentCharacters > 1) {
      return ` ${countCurrentCharacters} personagens`;
    }

    return `${countCurrentCharacters} personagem`;
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <S.Container>
        <S.Header>
          <S.WrapperContent>
            <S.Title>Listagem</S.Title>
            <S.AccountPersonally testID="count-listing">
              {handleCountCharacters()}
            </S.AccountPersonally>
          </S.WrapperContent>

          <S.WrapperInputSearch>
            <InputSearch
              placeholder="Busque por um personagem"
              value={search}
              onChangeText={setSearch}
              autoCorrect={false}
              onSubmitEditing={handleSubmitFilter}
            />
          </S.WrapperInputSearch>
        </S.Header>

        <S.Main>
          {isLoading || (isRefetching && loadSearch) ? (
            <Spinner />
          ) : (
            <FlatList
              data={characters}
              showsVerticalScrollIndicator={false}
              keyExtractor={character => String(character.id)}
              renderItem={({item: character}) => (
                <CardCharacters character={character} />
              )}
              onEndReached={loadMore}
              ListFooterComponent={isFetchingNextPage ? <Spinner /> : null}
            />
          )}
        </S.Main>
      </S.Container>
    </>
  );
}
