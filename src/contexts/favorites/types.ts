import {ReactNode} from 'react';

export interface FavoritesProviderProps {
  children: ReactNode;
}

export interface FavoritesContextData {
  favorites: number[];
  toggleFavorites: (id: number) => void;
}
