import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {Status} from '../../contexts/toast/types';

const color = {
  error: '#CF4034',
  success: '#62CF34',
};

type StylesProps = {
  status: Status;
};

export const Container = styled(Animated.View)<StylesProps>`
  position: absolute;

  align-self: center;

  background-color: ${({status}) =>
    status === 'error' ? color.error : color.success};

  padding: 6px 30px;
  border-radius: 10px;
`;

export const Message = styled.Text<StylesProps>`
  color: ${({status}) => (status === 'error' ? '#FFF' : '#000')};
`;
