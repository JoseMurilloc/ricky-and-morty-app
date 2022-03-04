import {ImageBackground} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;

  padding: 47px 35px 62px 35px;

  width: 100%;
  height: 100%;
`;

export const ButtonContinue = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 55px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
`;

export const ButtonContinueText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 15px;
  line-height: 22px;
  color: ${props => props.theme.colors.text.light};

  margin-right: 19px;
`;

export const Background = styled(ImageBackground).attrs(_ => ({
  resizeMode: 'stretch',
}))`
  flex: 1;
`;
