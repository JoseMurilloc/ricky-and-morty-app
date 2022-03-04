import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {CardCharacters} from '../../components/CardCharacters';

import {InputSearch} from '../../components/InputSearch';
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
            <AccountPersonally>{'62 personagens'}</AccountPersonally>
          </WrapperContent>

          <WrapperInputSearch>
            <InputSearch placeholder="Busque por um personagem" />
          </WrapperInputSearch>
        </Header>

        <Main>
          <FlatList
            data={[0, 1, 2, 4, 5]}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item)}
            renderItem={_ => <CardCharacters />}
          />
        </Main>
      </Container>
    </>
  );
}
