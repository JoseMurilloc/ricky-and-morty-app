import {renderHook, act} from '@testing-library/react-hooks';
import {useFavorites} from '.';
import {Providers} from '../../utils/tests/helper';

describe('Favorites context', () => {
  it('should have only one character in list the in favorites', async () => {
    const {result} = renderHook(() => useFavorites(), {
      wrapper: Providers,
    });

    act(() => {
      result.current.toggleFavorites(1);
    });

    expect(result.current.favorites.length).toEqual(1);
  });

  it('should have only two characters in list the in favorites', async () => {
    const {result} = renderHook(() => useFavorites(), {
      wrapper: Providers,
    });

    act(() => {
      result.current.toggleFavorites(1);
    });
    act(() => {
      result.current.toggleFavorites(2);
    });

    expect(result.current.favorites.length).toEqual(2);
  });

  it('should have remove of list characters in favorites on duplicated', async () => {
    const {result} = renderHook(() => useFavorites(), {
      wrapper: Providers,
    });

    act(() => {
      result.current.toggleFavorites(1);
    });
    act(() => {
      result.current.toggleFavorites(1);
    });

    expect(result.current.favorites.length).toEqual(0);
  });

  it('[case 2] should have remove of list characters in favorites on duplicated ', async () => {
    const {result} = renderHook(() => useFavorites(), {
      wrapper: Providers,
    });

    act(() => {
      result.current.toggleFavorites(1);
    });

    act(() => {
      result.current.toggleFavorites(2);
    });

    act(() => {
      result.current.toggleFavorites(1);
    });

    expect(result.current.favorites.length).toEqual(1);
    expect(result.current.favorites.includes(2)).toBeTruthy();
  });
});
