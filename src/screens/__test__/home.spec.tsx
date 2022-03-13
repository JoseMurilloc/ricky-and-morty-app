import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import {Home} from '../../screens/Home';

import {ThemeProvider} from 'styled-components/native';
import theme from '../../global/styles/theme';

import {Provider} from 'react-redux';
import store from '../../store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from '../../contexts/toast';
import {Toast} from '../../components/Toast';
import {FavoritesProvider} from '../../contexts/favorites';

export const Providers: React.FC = ({children}) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <FavoritesProvider>
              <ToastProvider>
                <Toast />
                {children}
              </ToastProvider>
            </FavoritesProvider>
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

// jest.mock('../../hooks/useCharacters', () => ({
//   data: {
//     info: {},
//     results: [],
//   },
// }));

describe('<Home />', () => {
  it('should have show correctly counter characters', () => {
    const {getByTestId} = render(<Home />, {wrapper: Providers});
    const textCounterListing = getByTestId('count-listing').children[0];

    expect(textCounterListing).toEqual('0 personagem');
  });

  it('should must have render characters counter after load data of API', async () => {
    const {findByText} = render(<Home />, {wrapper: Providers});
    const textCounterListing = await findByText('20 personagens');

    expect(textCounterListing).toBeTruthy();
  });
});
