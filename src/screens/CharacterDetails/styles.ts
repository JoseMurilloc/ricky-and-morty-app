import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StatusProps} from './types';
import {ScrollView} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
  height: 55%;
`;

export const ImageCharacter = styled.View`
  width: 100%;
  height: 100%;
`;

export const CharacterPhoto = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CircleIconBack = styled.TouchableHighlight`
  position: absolute;
  top: 40px;
  left: 20px;

  background-color: ${props => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;

export const ArrowBack = styled(Icon)``;

export const Heart = styled(Icon)``;

export const ContentInfo = styled(ScrollView)`
  padding: 31px 20px 0px 20px;
`;

export const HeaderSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameCharacter = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 24px;
  line-height: 36px;
  color: ${props => props.theme.colors.text.dark};
`;

export const AboutSection = styled.View`
  margin-top: 15px;

  flex-direction: row;
  justify-content: space-between;
`;

export const LocationSection = styled.View`
  margin-top: 15px;
`;

export const Info = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;

  color: ${props => props.theme.colors.text.dark};
`;

export const Status = styled.Text<StatusProps>`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;

  color: ${({theme, status}) => theme.colors.status[status]};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  line-height: 24px;

  color: ${props => props.theme.colors.text.dark};
`;

export const WrapperInfo = styled.View`
  width: 50%;
`;
export const Footer = styled.View`
  width: 100%;
`;

export const ButtonSearchGoogle = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.primary};
`;
export const ButtonSearchGoogleText = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 22px;
  line-height: 33px;

  color: #e1e1e6;
`;
