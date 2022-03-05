import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  CharacterDetails: {id: number} | undefined;
};

export type Navigation = NativeStackNavigationProp<RootStackParamList>;
