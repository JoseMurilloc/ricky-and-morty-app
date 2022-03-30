import React, {useEffect, useState} from 'react';
import {Animated, Easing, Platform} from 'react-native';
import {useToast} from '../../contexts/toast';
import * as S from './styles';

export function Toast() {
  const {message, isShow, status, duration, hideToast} = useToast();
  const [animatedToast] = useState(new Animated.Value(-60));

  useEffect(() => {
    isShow && show();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  function show() {
    Animated.timing(animatedToast, {
      toValue: 60,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    setTimeout(() => hide(), duration + 1500);
  }

  function hide() {
    Animated.timing(animatedToast, {
      toValue: -60,
      duration,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      hideToast();
    });
  }

  function ZIndex(val: number) {
    return Platform.select({
      ios: {zIndex: val},
      android: {elevation: val},
    });
  }

  return (
    <S.Container
      status={status}
      style={[{...ZIndex(100)}, {transform: [{translateY: animatedToast}]}]}>
      <S.Message status={status}>{message}</S.Message>
    </S.Container>
  );
}
