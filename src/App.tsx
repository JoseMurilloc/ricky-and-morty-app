import React from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './routes';

import theme from './global/styles/theme';
import {QueryClient, QueryClientProvider} from 'react-query';

import {FavoritesProvider} from './contexts/favorites';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
