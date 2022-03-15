import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import theme from '../../global/styles/theme';

import {Provider} from 'react-redux';
import store from '../../store';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider} from '../../contexts/toast';
import {Toast} from '../../components/Toast';
import {FavoritesProvider} from '../../contexts/favorites';

export const ProvidersToast: React.FC = ({children}) => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>{children}</ToastProvider>
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export const Providers: React.FC = ({children}) => {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </NavigationContainer>
  );
};
