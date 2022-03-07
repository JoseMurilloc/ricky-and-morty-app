export enum ActionTypes {
  addFavoriteCharacters = 'ADD_FAVORITE_CHARACTERS',
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export type IFavoritesState = {characters: Array<number>};
