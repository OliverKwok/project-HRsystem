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
import dynamicLinks from '@react-native-firebase/dynamic-links';
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
import {RootState, store, useAppDispatch, useAppSelector} from './store';
import {login, logout} from './redux/auth/actions';
import Config from 'react-native-config';
import {AuthState} from './redux/auth/state';
import {appendErrors} from 'react-hook-form';

const Stack = createNativeStackNavigator();
interface linkType {
  url: string;
}
function App() {
  // const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  // const user = useAppSelector(state => state.auth.user);
  const [jwtToken, setJwtToken] = useState<string | null>('');
  const [firebaseObj, setFirebaseObj] = useState({
    employeeId: '',
    firebase_taken: '',
  });

  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

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

    const token = await messaging().getToken();
    // setFirebaseObj({...firebaseObj, firebase_taken: token, employeeId: userId});

    if (enabled) {
      console.log('Authorization status:', authStatus);
      const token = await messaging().getToken();
      // console.log(token, 'firebase token 79');
      setFirebaseObj({...firebaseObj, firebase_taken: token});
      // put token into local storage
      // console.log(firebaseObj, 'firebase obj 90');

      await AsyncStorage.setItem('firebase_token', token);
    }
  }

  async function checkLogin(token: string) {
    // console.log({token});

    if (token === null || token === undefined) return;
    const profileRes = await fetch(`${Config.REACT_APP_BACKEND_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const profileJson = await profileRes.json();
    console.log(profileJson['id'], 'from app.tsx 101');

    const options = {method: 'GET'};
    let res = await fetch(
      `${Config.REACT_APP_BACKEND_URL}/ios-app/getUserStatus/${profileJson['id']}`,
      options,
    );

    let userInfo = await res.json();
    userInfo = userInfo['res'][0];
    let userStatus = userInfo['status'];

    if (
      userStatus == 'terminated' ||
      userStatus == 'resigned' ||
      userStatus == 'retired'
    ) {
      dispatch(logout());
      Alert.alert("'No authorization to access the mobile app'");
      // console.log('hihi from app.tsx 108');
      return;
    }

    dispatch(login(profileJson, token));
    AsyncStorage.setItem('token', token);
    // setUsername(profileJson.username);
  }
  const handleDynamicLink = (link: linkType) => {
    // Handle dynamic link inside your own application
    // if (link.url === 'https://invertase.io/offer') {
    //   // ...navigate to your offers screen
    // }
    // let url = link.url;
    // console.log(url);
    // let path = url.split('/')[3];
    // if (path === 'Login') {
    //   navigation.navigate('/Login');
    // }
  };

  // const reg_dynamicBackground_event_listener = async () => {
  //   const linkUrl: linkType =
  //     (await dynamicLinks().getInitialLink()) as linkType;
  //   let url = linkUrl.url;

  //   console.log(url);
  //   let path = url.split('/')[3];
  //   if (path === 'Login') {
  //     navigation.navigate('/Login');
  //   }
  //   // if(url==='https://invertase.io/offer')
  // };
  useEffect(() => {
    // console.log(userId, 'show at the first of 用效果');
    // setFirebaseObj({...firebaseObj, employeeId: userId});

    async function main() {
      let token = await AsyncStorage.getItem('token');

      setJwtToken(token);

      // console.log(firebaseObj, 'for the search of me');
      if (token === undefined || token === null) {
        dispatch(logout());
      } else if (token) {
        await checkLogin(token);
      }

      await reg_token();
      await reg_event_listener();
      // await reg_dynamicBackground_event_listener();
      // const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

      // return () => unsubscribe();
    }
    main();
  }, []);

  const config = {
    screens: {
      NavigationBar: {
        screens: {
          Attendance: 'attendance',
          Leave: 'leave',
          Salary: 'salary',
        },
      },
      LeaveApplication: 'leaveapplication',
    },
  };

  const linking = {
    prefixes: ['easyhrsolutions://'],
    config,
  };

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
              name="NavigationBar"
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
