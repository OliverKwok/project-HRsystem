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
import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Materiallcons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import Login from './screens/Login';
import {Provider, useSelector} from 'react-redux';
import {store, useAppDispatch, useAppSelector} from './store';
import {login, logout} from './redux/auth/actions';
import Config from 'react-native-config';
import {AuthState} from './redux/auth/state';

const Stack = createNativeStackNavigator();

function App() {
  const dispatch = useAppDispatch();
  const [jwtToken, setJwtToken] = useState<string | null>(null);
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  // console.log(isAuthenticated, 'hihi');

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
      // console.log('Authorization status:', authStatus);
      const token = await messaging().getToken();
      // console.log(token);
      // put token into local storage
    }
  }

  async function checkLogin(token: string) {
    // console.log({token});

    if (!token) return;
    const profileRes = await fetch(`${Config.REACT_APP_BACKEND_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const profileJson = await profileRes.json();
    // console.log({profileJson});
    dispatch(login(profileJson, token!));
    AsyncStorage.setItem('token', token!);
    // setUsername(profileJson.username);
  }

  useEffect(() => {
    async function main() {
      let token = await AsyncStorage.getItem('token');
      // console.log({token});

      setJwtToken(token);

      if (token == undefined) {
        dispatch(logout());
      } else if (token) {
        await checkLogin(token);
      }

      await reg_token();
      await reg_event_listener();
    }
    main();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.logoColor},
          headerTintColor: 'black',
        }}>
        {isAuthenticated ? (
          <>
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
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
