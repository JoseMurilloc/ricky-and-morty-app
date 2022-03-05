import React from 'react';

import {ActivityIndicator} from 'react-native';
import {Container} from './styles';

import theme from '../../global/styles/theme';

export function Spinner() {
  return (
    <Container>
      <ActivityIndicator color={theme.colors.primary} size={30} />
    </Container>
  );
}
