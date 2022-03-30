import React from 'react';
import {Image} from 'react-native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as S from './styles';

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
      <S.Container>
        <S.Background source={welcomeImage}>
          <S.Content>
            <Image source={logoImage} />
            <S.ButtonContinue onPress={() => navigation.navigate('Home')}>
              <S.ButtonContinueText>Prosseguir</S.ButtonContinueText>
              <Icon name="arrowright" size={21} color="#ffffff" />
            </S.ButtonContinue>
          </S.Content>
        </S.Background>
      </S.Container>
    </>
  );
}
