/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';
import {Image, StyleSheet} from 'react-native';
import {Color} from '../const';
import {RoutesRecord} from './models';
const isTablet = DeviceInfo.isTablet();
const Tab = createBottomTabNavigator<RoutesRecord>();
import {_Icon, _Image} from '../components';
import * as screens from '../screens';
import {MyWatch} from './WatchNavigator';

export const TabNavigator: FC = () => {
  const dashboard = require('assets/icons/dashboard.png');
  const watch = require('assets/icons/watch.png');
  const media = require('assets/icons/library.png');
  const more = require('assets/icons/list.png');
  // same process will be apply for fill

  return (
    <Tab.Navigator
    initialRouteName='Watch'
      screenOptions={({route}) => ({
        tabBarLabelStyle: {...styles.labelStyle},
        tabBarStyle: {
          ...styles.tabBar,
        },
        tabBarItemStyle: {
          justifyContent: 'space-around',
          top: isTablet ? -5 : 10,
        },
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? dashboard : dashboard;
          } else if (route.name === 'Watch') {
            iconName = focused ? watch : watch;
          } else if (route.name === 'Library') {
            iconName = focused ? media : media;
          } else {
            iconName = focused ? more : more;
          }
          return (
            <Image
              style={{
                tintColor: focused ? Color.White : Color.Gray,
                width: 16,
                height: 16,
              }}
              source={iconName}
            />
          );
        },
        tabBarActiveTintColor: Color.White,
        tabBarInactiveTintColor: Color.Gray,
      })}>
      <Tab.Screen name="Dashboard" component={screens.Dashboard} />
      <Tab.Screen name="Watch" component={screens.Watch} />
      <Tab.Screen name="Library" component={screens.MediaLibrary} />
      <Tab.Screen name="More" component={screens.More} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Color.Primary,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 75,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
  },
  labelStyle: {
    position: 'absolute',
    bottom: isTablet ? 12 : -2,
    fontFamily: 'Poppins-SemiBold',
  },
});
