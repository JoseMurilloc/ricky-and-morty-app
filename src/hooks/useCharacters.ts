import {useInfiniteQuery} from 'react-query';
import {api} from '../services/axios';
import {useToast} from '../contexts/toast';

type useCharactersParams = {
  key: string;
  search: string;
};

export function useCharacters({key, search}: useCharactersParams) {
  const {showToast} = useToast();

  return useInfiniteQuery(key, fetchingCharacter, {
    getNextPageParam: lastPage => lastPage.info.next ?? false,
    onError: _ => {
      showToast({
        messageToast: 'Não existe personagens com o nome inserido',
        statusToast: 'error',
      });
    },
  });

  async function fetchingCharacter({
    pageParam = `/character?page=1&name=${search}`,
  }) {
    const res = await api.get(pageParam);

    return res.data;
  }
}
