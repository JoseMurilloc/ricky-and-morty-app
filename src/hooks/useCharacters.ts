import {useInfiniteQuery} from 'react-query';
import {api} from '../services/axios';

export function useCharacters(key: string) {
  return useInfiniteQuery(key, fetchingCharacter, {
    getNextPageParam: lastPage => lastPage.info.next ?? false,
  });

  async function fetchingCharacter({pageParam = '/character?page=1'}) {
    const res = await api.get(pageParam);

    const amountCharacters = Math.ceil(
      res.data.info.count / res.data.info.pages,
    );

    return {...res.data, amountCharacters};
  }
}
