import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalStyles} from '../constants/styles';
import Attendance from './Attendance';
import Leave from './Leave';
import Notification from './Notification';
import Salary from './Salary';
import Setting from './Setting';

function BottomBar() {
  const Tab = createBottomTabNavigator();
  // const config = {
  //   screens: {
  //     Attendance: 'attendance',
  //     Leave: 'leave',
  //     Salary: 'salary',
  //   },
  // };

  // const linking = {
  //   prefixes: ['easyhrsolutions://'],
  //   config,
  // };

  return (
    <Tab.Navigator
      // linking={linking}
      initialRouteName="Attendance"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName: any;
          if (route.name === 'Attendance') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            size = focused ? size + 8 : size;
          } else if (route.name === 'Leave') {
            iconName = focused
              ? 'ios-battery-charging'
              : 'ios-battery-dead-outline';
            size = focused ? size + 8 : size;
          } else if (route.name === 'Salary') {
            iconName = focused ? 'calculator' : 'calculator-outline';
            size = focused ? size + 8 : size;
          } else if (route.name === 'Notification') {
            iconName = focused
              ? 'notifications-circle'
              : 'notifications-circle-outline';
            size = focused ? size + 8 : size;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            size = focused ? size + 8 : size;
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        headerStyle: {backgroundColor: GlobalStyles.colors.logoColor},
        headerTintColor: 'black',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.logoColor},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: GlobalStyles.colors.mainColor,
      })}>
      <Tab.Screen name="Attendance" component={Attendance} />
      <Tab.Screen name="Leave" component={Leave} />

      <Tab.Screen name="Salary" component={Salary} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomBar;
