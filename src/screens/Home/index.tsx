import React, {useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {CardCharacters} from '../../components/CardCharacters';

import {InputSearch} from '../../components/InputSearch';
import {Spinner} from '../../components/Spinner';
import {useCharacters} from '../../hooks/useCharacters';
import {
  AccountPersonally,
  Container,
  Header,
  WrapperContent,
  Title,
  WrapperInputSearch,
  Main,
} from './styles';

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

  const countCurrentCharacters = data?.pages.reduce(
    (acc, page) => (acc += page.results.length),
    0,
  );

  const handleCountCharacters = () => {
    if (!countCurrentCharacters) {
      return '0 personagem';
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
      <Container>
        <Header>
          <WrapperContent>
            <Title>Listagem</Title>
            <AccountPersonally>{handleCountCharacters()}</AccountPersonally>
          </WrapperContent>

          <WrapperInputSearch>
            <InputSearch
              placeholder="Busque por um personagem"
              value={search}
              onChangeText={setSearch}
              autoCorrect={false}
              onSubmitEditing={handleSubmitFilter}
            />
          </WrapperInputSearch>
        </Header>

        <Main>
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
        </Main>
      </Container>
    </>
  );
}
