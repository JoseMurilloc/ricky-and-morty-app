import {combineReducers} from 'redux';
import favorites from './modules/favorites/reducer';

const reducers = combineReducers({
  favorites,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
