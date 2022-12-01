import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalStyles} from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';
import {useAppDispatch} from '../store';
import {login} from '../redux/auth/actions';
import Config from 'react-native-config';
import {useSelector} from 'react-redux';

function Login({navigation}: any) {
  const dispatch = useAppDispatch();
  // const james = useSelector(state => state);
  const [loginObject, setLoginObject] = useState({
    username: 'tse.ching.wong@company.com',
    password: '1',
  });

  // console.log(loginObject);

  async function loginHandler() {
    const res = await fetch(`${Config.REACT_APP_BACKEND_URL}/auth/login_ios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginObject),
    });
    const json = await res.json();
    console.log(json);

    if (json.statusCode == 500) {
      Alert.alert('No authorization to access the mobile app');
    } else if (json.statusCode == 401) {
      Alert.alert('Wrong username or password');
    } else {
      Alert.alert('Login successfully');
      const profileRes = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/profile`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${json.access_token}`,
          },
        },
      );
      const profileJson = await profileRes.json();
      console.log({profileJson});

      dispatch(login(profileJson, json.access_token));
      await AsyncStorage.setItem('token', json.access_token);
      navigation.navigate('Navigation Bar');
    }
  }

  return (
    <LinearGradient
      style={styles.loginPageContainer}
      colors={['#23a6d5', '#23d5ab']}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Easy HR Solutions</Text>
      </View>
      <View style={styles.inputPartContainer}>
        <View style={styles.inputItemContainer}>
          <Text style={styles.label}>Employee ID</Text>
          <TextInput
            // value="tse.ching.chan@company.com"
            style={styles.input}
            placeholder="Please type your employee id"
            onChangeText={text => {
              setLoginObject({...loginObject, username: text});
              // checkLeaveApplicationInput();
            }}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputItemContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            // value="1"
            style={styles.input}
            placeholder="Please type your password"
            onChangeText={text => {
              setLoginObject({...loginObject, password: text});
            }}
          />
        </View>
      </View>
      <Pressable
        onPress={loginHandler}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.button}>
          <Text style={{fontSize: 20}}>Login</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}

export default Login;

const styles = StyleSheet.create({
  // linearGradient: {
  //   // flex: 1,
  //   // paddingLeft: 15,
  //   // paddingRight: 15,
  //   // borderRadius: 5,
  // },
  loginPageContainer: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    flex: 1,
    // marginTop: '-20%',
    // backgroundColor:
    // opacity: 0.5,
  },

  logoContainer: {
    // borderWidth: 1,
    marginBottom: 70,
  },

  logoText: {
    // color: '#ffffff',
    fontSize: 35,
    color: GlobalStyles.colors.loginInputColor,
  },

  inputPartContainer: {
    // borderWidth: 1,
    width: '100%',
    height: '30%',
    marginBottom: 40,
  },

  label: {
    fontSize: 18,
    color: GlobalStyles.colors.loginInputColor,
    marginBottom: 2,
  },

  input: {
    // backgroundColor: GlobalStyles.colors.inputColor,
    padding: 8,
    // borderRadius: 30,
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: GlobalStyles.colors.loginInputColor,
    color: '#ffffff',

    // color: '#97AEB0',
  },

  inputItemContainer: {
    marginVertical: 20,
  },

  button: {
    height: 40,
    width: 100,
    borderBottomWidth: 3,
    // borderRadius: 20,
    backgroundColor: '#EFEFEF',
    color: 'black',
    borderBottomColor: '#A8ABB6',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  pressed: {
    opacity: 0.5,
  },
});
