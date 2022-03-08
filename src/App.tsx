import React from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './routes';

import theme from './global/styles/theme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './store';
import {FavoritesProvider} from './contexts/favorites';
import {Toast} from './components/Toast';
import {ToastProvider} from './contexts/toast';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <FavoritesProvider>
              <ToastProvider>
                <Toast />
                <AppRoutes />
              </ToastProvider>
            </FavoritesProvider>
          </QueryClientProvider>
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
