import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.card};
  margin-bottom: 15px;
  border-radius: 6px;
`;

export const ImageCharacter = styled.View`
  height: 100%;
  width: 150px;
`;

export const CharacterPhoto = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const ContentCharacter = styled.View`
  position: relative;
  flex: 1;
  padding: 10px;

  flex-direction: row;
`;

export const ContentCharacterInfo = styled.View`
  flex: 1;
`;

export const WrapperButtonFavorites = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const NameCharacter = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 20px;
  line-height: 30px;

  color: ${props => props.theme.colors.text.dark};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 16px;
  line-height: 24px;

  color: ${props => props.theme.colors.text.dark};
`;

export const Specie = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.text.information};
`;

export const Origin = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.text.information};
`;

export const ButtonFavorite = styled.TouchableOpacity``;
