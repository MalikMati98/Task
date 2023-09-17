import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {MyWatch} from './WatchNavigator';
export const RootNavigator: FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        <Stack.Screen name="home-screen" component={MyWatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
