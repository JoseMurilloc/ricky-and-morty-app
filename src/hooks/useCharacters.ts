import {useInfiniteQuery} from 'react-query';
import {api} from '../services/axios';
import {Alert} from 'react-native';

type useCharactersParams = {
  key: string;
  search: string;
};

export function useCharacters({key, search}: useCharactersParams) {
  return useInfiniteQuery(key, fetchingCharacter, {
    getNextPageParam: lastPage => lastPage.info.next ?? false,
    onError: _ => {
      Alert.alert('Não existe personagens com o nome inserido');
    },
  });

  async function fetchingCharacter({
    pageParam = `/character?page=1&name=${search}`,
  }) {
    const res = await api.get(pageParam);

    return res.data;
  }
}
