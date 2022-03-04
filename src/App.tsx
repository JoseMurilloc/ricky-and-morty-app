import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './global/styles/theme';
import {Welcome} from './screens/Welcome';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
