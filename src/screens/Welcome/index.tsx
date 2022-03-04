import React from 'react';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Content,
  Background,
  ButtonContinue,
  ButtonContinueText,
} from './styles';

import welcomeImage from '../../assets/WelcomeBG.png';
import logoImage from '../../assets/logo.png';

export function Welcome() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Background source={welcomeImage}>
          <Content>
            <Image source={logoImage} />
            <ButtonContinue>
              <ButtonContinueText>Prosseguir</ButtonContinueText>
              <Icon name="arrowright" size={21} color="#ffffff" />
            </ButtonContinue>
          </Content>
        </Background>
      </Container>
    </>
  );
}
