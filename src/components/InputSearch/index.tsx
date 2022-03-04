import React from 'react';
import {Container, Input} from './styles';
import {InputSearchProps} from './types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../global/styles/theme';

export function InputSearch({...rest}: InputSearchProps) {
  return (
    <Container>
      <Icon name="search" color={theme.colors.primary} size={20} />
      <Input {...rest} />
    </Container>
  );
}
