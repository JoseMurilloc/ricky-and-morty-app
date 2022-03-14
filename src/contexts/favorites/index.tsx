import React, {useContext, useState} from 'react';
import {createContext} from 'react';
import {FavoritesContextData, FavoritesProviderProps} from './types';

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData,
);

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

export function useFavorites(): FavoritesContextData {
  const context = useContext(FavoritesContext);

  return context;
}
