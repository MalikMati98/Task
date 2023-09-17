import {createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import * as screens from '../screens';
import {TabNavigator} from './TabNavigator';
import {RoutesRecord} from './models';

const Stack = createStackNavigator<RoutesRecord>();

export const MyWatch: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Watch" component={TabNavigator} />
      <Stack.Screen name="movie-details" component={screens.MoveDetails} />
      <Stack.Screen name="watch-trailer" component={screens.WatchTrailer} />
      <Stack.Screen name="cinema-hall" component={screens.CinemaHall} />
      <Stack.Screen name="seat-selection" component={screens.SeatSelection} />
    </Stack.Navigator>
  );
};
