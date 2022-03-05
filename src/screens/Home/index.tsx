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

  const {
    data,
    refetch,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useCharacters({key: 'characters', search});

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  function handleSubmitFilter() {
    refetch();
  }

  const characters = data?.pages.map(page => page.results).flat();
  const countCurrentCharacters =
    data?.pages?.length * data?.pages[0].amountCharacters;

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
            <AccountPersonally>{`${countCurrentCharacters} personagens`}</AccountPersonally>
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
          {isLoading && <Spinner />}

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
        </Main>
      </Container>
    </>
  );
}
