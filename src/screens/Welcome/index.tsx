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
import {useNavigation} from '@react-navigation/native';
import {Navigation} from '../../routes/typesRoutes';

export function Welcome() {
  const navigation = useNavigation<Navigation>();

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
            <ButtonContinue onPress={() => navigation.navigate('Home')}>
              <ButtonContinueText>Prosseguir</ButtonContinueText>
              <Icon name="arrowright" size={21} color="#ffffff" />
            </ButtonContinue>
          </Content>
        </Background>
      </Container>
    </>
  );
}
