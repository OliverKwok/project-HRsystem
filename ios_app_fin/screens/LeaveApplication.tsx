import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/IconButton';
import {GlobalStyles} from '../constants/styles';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
// import DropDownPicker from 'react-native-dropdown-picker';

// const [inputTextColor, setInputTextColor] = useState('#97AEB0');

function LeaveApplication({navigation}: any) {
  // navigation.setOptions({
  //   headerTintColor: 'black',
  //   headerRight: (tintColor: any) => (
  //     <IconButton
  //       icon="close"
  //       size={24}
  //       color={tintColor}
  //       onPress={() => {
  //         navigation.goBack();
  //       }}
  //     />
  //   ),
  // });

  function checkLeaveApplicationInput() {
    // console.log(
    //   'yo',
    //   (new Date(formObject.endDate).getTime() -
    //     new Date(formObject.startDate).getTime()) /
    //     (1000 * 3600 * 24),
    // );
    if (
      (new Date(formObject.endDate).getTime() -
        new Date(formObject.startDate).getTime()) /
        (1000 * 3600 * 24) <
      0
    ) {
      setShowInvalidDate(true);
      // setShowInputNotFilled(false);
      // setShowSubmitSucceeded(false);
      // setShowInputReminder(false);
      return;
    } else {
      setShowInvalidDate(false);
    }

    // if (
    //   new Date(formObject.endDate).getTime() ==
    //     new Date(formObject.startDate).getTime() &&
    //   formObject.startDateDuration == 'second_half' &&
    //   formObject.endDateDuration == 'first_half'
    // ) {
    //   setShowInvalidDate(true);
    //   // setShowInputNotFilled(false);
    //   // setShowSubmitSucceeded(false);
    //   // setShowInputReminder(false);
    // } else if (
    //   new Date(formObject.endDate).getTime() ==
    //     new Date(formObject.startDate).getTime() &&
    //   formObject.startDateDuration == 'second_half' &&
    //   formObject.endDateDuration == 'first_half'
    // ) {
    //   setShowInvalidDate(true);
    // } else {
    //   setShowInvalidDate(false);
    // }
    if (
      formObject.employeeID == '' ||
      formObject.leaveType == '' ||
      formObject.startDate == 'Please select a start date' ||
      formObject.startDateDuration == '' ||
      formObject.endDate == 'Please select a end date' ||
      formObject.endDateDuration == '' ||
      formObject.workingDays == 0
    ) {
      // setShowInvalidDate(false);
      setShowInputNotFilled(true);
      // setShowSubmitSucceeded(false);
      setShowInputReminder(false);
    } else {
      setShowInputReminder(false);
      setShowInputNotFilled(false);
    }

    setShowApply(true);
    // else {
    //   setShowInvalidDate(false);
    //   setShowInputNotFilled(false);
    //   setShowSubmitSucceeded(true);
    //   setShowInputReminder(false);
    // }
  }

  function submitHandler() {
    console.log('You are going to submit');
    setShowSubmitSucceeded(true);
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  }

  const [formObject, setFormObject] = useState({
    employeeID: '',
    leaveType: '',
    startDate: 'Please select a start date',
    startDateDuration: '',
    endDate: 'Please select a end date',
    endDateDuration: '',
    workingDays: 0,
  });
  console.log(formObject);
  console.log(
    'yo',
    (new Date(formObject.endDate).getTime() -
      new Date(formObject.startDate).getTime()) /
      (1000 * 3600 * 24),
  );
  // console.log(new Date(formObject.startDate));
  const [inputTextColor1, setInputTextColor1] = useState('#97AEB0');
  const [inputTextColor2, setInputTextColor2] = useState('#97AEB0');
  const [openPicker1, setOpenPicker1] = useState(false);
  const [openPicker2, setOpenPicker2] = useState(false);
  const [showInvalidDate, setShowInvalidDate] = useState(false);
  const [showInputReminder, setShowInputReminder] = useState(true);
  const [showSubmitSucceeded, setShowSubmitSucceeded] = useState(false);
  const [showInputNotFilled, setShowInputNotFilled] = useState(false);
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    if (formObject.startDate === 'Please select a start date') {
      return;
    }
    checkLeaveApplicationInput();
  }, [formObject]);
  // const checkFunction = checkLeaveApplicationInput;

  return (
    <View style={styles.container}>
      {/* <Button title="Open" onPress={() => setOpenPicker1(true)} /> */}
      <DatePicker
        modal
        mode={'date'}
        open={openPicker1}
        date={new Date()}
        onConfirm={date => {
          checkLeaveApplicationInput();
          setOpenPicker1(false);
          setFormObject({
            ...formObject,
            startDate: new Date(date).toISOString().split('T')[0],
          });
          setInputTextColor1('black');
          // checkFunction;
        }}
        onCancel={() => {
          setOpenPicker1(false);
        }}
      />
      <DatePicker
        modal
        mode={'date'}
        open={openPicker2}
        date={new Date()}
        onConfirm={date => {
          checkLeaveApplicationInput();
          setOpenPicker2(false);
          setFormObject({
            ...formObject,
            endDate: new Date(date).toISOString().split('T')[0],
          });
          setInputTextColor2('black');
          // checkFunction;
        }}
        onCancel={() => {
          setOpenPicker2(false);
        }}
      />
      {/* ======================================================================================================= */}

      {/* Employee ID part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Employee ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Please type your employee id"
          onChangeText={text => {
            setFormObject({...formObject, employeeID: text});
            checkLeaveApplicationInput();
          }}
        />
      </View>

      {/* Leave Type Part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Leave Type</Text>
        <View>
          <RNPickerSelect
            placeholder={{
              label: 'Please select a leave type',
              value: 'Please select a leave type',
              // color: 'red',
            }}
            onValueChange={value => {
              setFormObject({...formObject, leaveType: value});
              checkLeaveApplicationInput();
            }}
            items={[
              {label: 'Annual Leave', value: 'Annual Leave'},
              {label: 'Sick Leave', value: 'Sick Leave'},
              {label: 'Maternity Leave', value: 'Maternity Leave'},
            ]}
            style={styles}
          />
        </View>
      </View>

      {/* Start Date part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Start Date</Text>
        <View style={styles.input}>
          <Text
            style={{fontSize: 18, color: inputTextColor1}}
            onPress={() => {
              setOpenPicker1(true);
            }}>
            {formObject.startDate}
          </Text>
        </View>
      </View>

      {/* Start Date Duration part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Start Date Duration</Text>
        <View>
          <RNPickerSelect
            placeholder={{
              label: 'Please select a duration',
              value: '',
            }}
            onValueChange={value => {
              setFormObject({...formObject, startDateDuration: value});
              checkLeaveApplicationInput();
            }}
            items={[
              {label: 'full day', value: 'full_day'},
              {label: 'first half', value: 'first_half'},
              {label: 'second half', value: 'second_half'},
            ]}
            style={styles}
          />
        </View>
      </View>

      {/* End Date part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>End Date</Text>
        <View style={styles.input}>
          <Text
            style={{fontSize: 18, color: inputTextColor2}}
            onPress={() => setOpenPicker2(true)}>
            {formObject.endDate}
          </Text>
        </View>
      </View>

      {/* End Date Duration part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>End Date Duration</Text>
        <View>
          <RNPickerSelect
            placeholder={{label: 'Please select a duration', value: ''}}
            onValueChange={value => {
              setFormObject({...formObject, endDateDuration: value});
              checkLeaveApplicationInput();
            }}
            items={[
              {label: 'full day', value: 'full_day'},
              {label: 'first half', value: 'first_half'},
              {label: 'second half', value: 'second_half'},
            ]}
            style={styles}
          />
        </View>
      </View>

      {/* Number of working days part */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Working Days</Text>
        <TextInput
          style={styles.input}
          placeholder="Example: 10"
          onChangeText={number => {
            setFormObject({...formObject, workingDays: parseFloat(number)});
            checkLeaveApplicationInput();
          }}
        />
      </View>
      <View style={styles.alertContainer}>
        {showInvalidDate && (
          <Text style={styles.invalidDate}>Invalid Date</Text>
        )}
        {showInputReminder && (
          <Text style={styles.inputReminder}>Please fill all the inputs</Text>
        )}
        {showSubmitSucceeded && (
          <Text style={styles.submitSucceed}>Leave application submitted!</Text>
        )}
        {showInputNotFilled && (
          <Text style={styles.inputNotFilled}>Please fill all the inputs!</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={({pressed}) => pressed && styles.pressed}>
          <View style={styles.button}>
            <Text style={{fontSize: 20}}>Cancel</Text>
          </View>
        </Pressable>
        {showApply && (
          <Pressable
            onPress={submitHandler}
            style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.button}>
              <Text style={{fontSize: 20}}>Apply</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default LeaveApplication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },

  inputContainer: {marginHorizontal: 4, marginVertical: 7, width: '75%'},

  label: {
    fontSize: 18,
    color: GlobalStyles.colors.logoColor,
    marginBottom: 2,
  },

  input: {
    backgroundColor: GlobalStyles.colors.inputColor,
    padding: 8,
    borderRadius: 30,
    fontSize: 18,
    color: 'black',
    // color: '#97AEB0',
  },

  // inputText: {
  //   fontSize: 18,
  //   color: inputTextColor,
  // },

  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  button: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: GlobalStyles.colors.inputColor,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertContainer: {
    height: '3%',
    width: '100%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  invalidDate: {
    color: 'red',
    fontSize: 20,
  },

  inputReminder: {
    color: '#9DA1AE',
    fontSize: 20,
  },
  submitSucceed: {
    color: 'black',
    fontSize: 20,
  },
  inputNotFilled: {
    color: 'red',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.5,
  },

  inputIOS: {
    backgroundColor: '#cbe7e7',
    padding: 8,
    borderRadius: 30,
    fontSize: 18,
    color: 'black',
    // placeholderColor: '#8DACAE',
    // placeholderColor: 'red',
  },
});
