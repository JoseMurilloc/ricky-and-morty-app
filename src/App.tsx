import React from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './routes';

import theme from './global/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
