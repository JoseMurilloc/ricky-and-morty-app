import {ReactNode} from 'react';

export interface FavoritesProviderProps {
  children: ReactNode;
}

export interface MealContextData {
  favorites: number[];
  toggleFavorites: (id: number) => void;
}
