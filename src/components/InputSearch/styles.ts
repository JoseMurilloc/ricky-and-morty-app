import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;

  padding: 0 15px;

  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const Input = styled(TextInput)`
  height: 100%;
  flex: 1;
  margin-left: 20px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.regular};
`;
