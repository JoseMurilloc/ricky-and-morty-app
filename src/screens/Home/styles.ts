import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  position: relative;

  width: 100%;
  background: ${props => props.theme.colors.primary};
  height: 125px;
  padding-top: 40px;
`;

export const WrapperContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 19px;
`;

export const WrapperInputSearch = styled.View`
  position: absolute;
  bottom: -25px;

  padding: 0 15px;

  width: 100%;
  height: 50px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 20px;
  line-height: 32px;
  color: ${props => props.theme.colors.text.light};
`;

export const AccountPersonally = styled.Text`
  font-size: 14px;
  line-height: 32px;
  color: ${props => props.theme.colors.info};
  font-family: ${props => props.theme.fonts.regular};
`;

export const Main = styled.View`
  flex: 1;
  z-index: -1;
  padding: 0 15px;
  padding-top: 41px;
`;
