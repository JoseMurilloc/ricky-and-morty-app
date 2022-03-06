import React, {useContext, useState} from 'react';
import {createContext} from 'react';
import {MealContextData, FavoritesProviderProps} from './types';

const FavoritesContext = createContext<MealContextData>({} as MealContextData);

export function FavoritesProvider({children}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<number[]>(() => []);

  const toggleFavorites = (id: number) => {
    if (favorites.includes(id)) {
      const favoritesWithoutThisId = favorites.filter(f => f !== id);
      setFavorites(favoritesWithoutThisId);
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorites: toggleFavorites,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): MealContextData {
  const context = useContext(FavoritesContext);

  return context;
}
