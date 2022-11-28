/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Materiallcons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {GlobalStyles} from './constants/styles';
import LeaveApplication from './screens/LeaveApplication';
import BottomBar from './screens/BottomBar';

const Stack = createNativeStackNavigator();

const App = () => {
  // const navigation = useNavigation();
  useEffect(() => {
    async function main() {
      await reg_token();
      await reg_event_listener();
    }
    main();
  });
  async function reg_event_listener() {
    // foreground
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    // background & quit
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }
  async function reg_token() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      const token = await messaging().getToken();
      console.log(token);
      // put token into local storage
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.logoColor},
          headerTintColor: 'black',
        }}>
        <Stack.Screen
          name="Navigation Bar"
          component={BottomBar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaveApplication"
          component={LeaveApplication}
          options={{
            title: 'Leave Application',
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
