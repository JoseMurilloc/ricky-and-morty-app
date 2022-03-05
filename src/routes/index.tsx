import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Welcome} from '../screens/Welcome';
import {Home} from '../screens/Home';
import {CharacterDetails} from '../screens/CharacterDetails';
import {RootStackParamList} from './typesRoutes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
}
