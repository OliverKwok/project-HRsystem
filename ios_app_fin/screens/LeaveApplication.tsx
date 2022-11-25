import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/IconButton';
import {GlobalStyles} from '../constants/styles';

function LeaveApplication({navigation}: any) {
  //   navigation.setOptions({
  //     headerTintColor: 'black',
  //     headerRight: (tintColor: any) => (
  //       <IconButton
  //         icon="close"
  //         size={24}
  //         color={tintColor}
  //         onPress={() => {
  //           navigation.goBack();
  //         }}
  //       />
  //     ),
  //   });

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Employee ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Please type your employee id"
        />
      </View>
      <View>
        <Text>Leave Type</Text>
        <TextInput keyboardType="number-padd" />
      </View>
      <View>
        <Text>Start Date</Text>
        <TextInput keyboardType="number-padd" />
      </View>
      <View>
        <Text>End Date</Text>
        <TextInput keyboardType="number-padd" />
      </View>
      <View>
        <Text>Others</Text>
        <TextInput
        //   keyboardType="number-padd"
        //   multiline:true
        //   autoCorrect:false
        //   autoCapitalize="none"
        />
      </View>
    </View>
  );
}

export default LeaveApplication;

const styles = StyleSheet.create({
  inputContainer: {marginHorizontal: 4, marginVertical: 16},
  label: {fontSize: 12, color: GlobalStyles.colors.logoColor, marginBottom: 4},
  input: {
    backgroundColor: '#cbe7e7',
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    width: '80%',
  },
});
