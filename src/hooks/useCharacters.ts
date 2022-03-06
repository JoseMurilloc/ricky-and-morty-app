import {useInfiniteQuery} from 'react-query';
import {api} from '../services/axios';

type useCharactersParams = {
  key: string;
  search: string;
};

export function useCharacters({key, search}: useCharactersParams) {
  return useInfiniteQuery(key, fetchingCharacter, {
    getNextPageParam: lastPage => lastPage.info.next ?? false,
  });

  async function fetchingCharacter({
    pageParam = `/character?page=1&name=${search}`,
  }) {
    const res = await api.get(pageParam);
    return res.data;
  }
}
