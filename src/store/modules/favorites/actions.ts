import {ActionTypes} from './types';

export function addFavoriteCharacters(id: number) {
  return {
    type: ActionTypes.addFavoriteCharacters,
    payload: {id},
  };
}
