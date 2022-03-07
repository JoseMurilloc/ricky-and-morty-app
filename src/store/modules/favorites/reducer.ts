import {Action, ActionTypes, IFavoritesState} from './types';

const INITIAL_STATE: IFavoritesState = {
  characters: [],
};

export default function favorites(
  state: IFavoritesState = INITIAL_STATE,
  action: Action,
) {
  switch (action.type) {
    case ActionTypes.addFavoriteCharacters:
      if (state.characters.includes(action.payload.id)) {
        return {
          characters: [
            ...state.characters.filter(
              character => character !== action.payload.id,
            ),
          ],
        };
      } else {
        return {characters: [...state.characters, action.payload.id]};
      }

    default:
      return state;
  }
}
