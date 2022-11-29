import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import LinearGradient from 'react-native-linear-gradient';

function Login() {
  function loginHandler() {}

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
            style={styles.input}
            placeholder="Please type your employee id"
            onChangeText={text => {
              // setFormObject({...formObject, employeeID: text});
              // checkLeaveApplicationInput();
            }}
          />
        </View>
        <View style={styles.inputItemContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Please type your password"
            onChangeText={text => {
              // setFormObject({...formObject, employeeID: text});
              // checkLeaveApplicationInput();
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
