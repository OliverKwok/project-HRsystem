/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
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
  return (
    // <View>
    //   <Text>Hello World</Text>
    //   <Ionic name="home" />
    // </View>
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
