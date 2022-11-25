import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator as StackNavigate} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {PickerSelect} from '../components/PickerSelect';
import LeaveApplication from './LeaveApplication';
import {GlobalStyles} from '../constants/styles';

// import {ScrollView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = StackNavigate();

function Leave({navigation}: any) {
  // const navigation = useNavigation();

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  function leavePressHandler() {
    // console.log('hi');
    navigation.navigate('LeaveApplication');
  }

  return (
    // <View>
    //   {/* <NavigationContainer> */}
    //   <Stack.Screen name="LeaveApplication" component={LeaveApplication} />
    //   {/* </NavigationContainer> */}
    // </View>
    <View style={styles.PageContainer}>
      <Pressable
        onPress={leavePressHandler}
        style={({pressed}) =>
          pressed ? styles.pressed : styles.ButtonContainer
        }>
        <View>
          <Text style={{fontSize: 20}}>Apply for Leave</Text>
        </View>
      </Pressable>
      <ScrollView></ScrollView>
    </View>
  );
}

export default Leave;

const styles = StyleSheet.create({
  PageContainer: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },

  ButtonContainer: {
    borderWidth: 1,
    // flex: 1,
    width: '50%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#c1e6e6',
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: GlobalStyles.colors.logoColor,
    borderWidth: 1,
    // flex: 1,
    width: '50%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
