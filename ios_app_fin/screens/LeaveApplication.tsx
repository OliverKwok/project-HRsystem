import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  // YellowBox,
  LogBox,
} from 'react-native';
import {Config} from 'react-native-config';
import {useNavigation} from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons';
import IconButton from '../components/IconButton';
import {GlobalStyles} from '../constants/styles';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
import {useSelector} from 'react-redux';
import {AuthState} from '../redux/auth/state';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
// YellowBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);

function LeaveApplication({navigation, route}: any) {
  const {fetchLeaveRecord} = route.params;

  const userId = useSelector((state: AuthState) => state.auth.user.id);
  // console.log(userId);

  //Check the input for leave application
  function checkLeaveApplicationInput() {
    // console.log(
    //   'yo',
    //   (new Date(formObject.endDate).getTime() -
    //     new Date(formObject.startDate).getTime()) /
    //     (1000 * 3600 * 24),
    // );
    // console.log(
    //   'fuck',
    //   (new Date(formObject.startDate).getTime() - new Date().getTime()) /
    //     (1000 * 3600 * 24),
    // );

    if (
      (new Date(formObject.endDate).getTime() -
        new Date(formObject.startDate).getTime()) /
        (1000 * 3600 * 24) <
        0 ||
      (new Date(formObject.startDate).getTime() - new Date().getTime()) /
        (1000 * 3600 * 24) <
        3
    ) {
      setShowInvalidDate(true);
      setShowApply(false);
      // setShowInputNotFilled(false);
      // setShowSubmitSucceeded(false);
      // setShowInputReminder(false);
      return;
    } else {
      setShowInvalidDate(false);
    }
    if (
      // formObject.employeeID == '' ||
      formObject.leaveType == '' ||
      formObject.startDate == 'Please select a start date' ||
      formObject.startDateDuration == '' ||
      formObject.endDate == 'Please select a end date' ||
      formObject.endDateDuration == '' ||
      formObject.workingDays == 0 ||
      !formObject.workingDays
    ) {
      // setShowInvalidDate(false);
      setShowInputNotFilled(true);
      // setShowSubmitSucceeded(false);
      setShowInputReminder(false);
      setShowApply(false);
      return;
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

  async function submitHandler() {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formObject),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    const res = await fetch(
      `${Config.REACT_APP_BACKEND_URL}/ios-app/leaveApplication`,
      requestOptions,
    );
    const jsonData = await res.json();
    console.log(jsonData);

    console.log('You are going to submit');
    setShowSubmitSucceeded(true);
    fetchLeaveRecord();
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  }

  //一大堆useState and useEffect
  const [formObject, setFormObject] = useState({
    employeeID: userId,
    leaveType: '',
    startDate: 'Please select a start date',
    startDateDuration: '',
    endDate: 'Please select a end date',
    endDateDuration: '',
    workingDays: 0,
  });
  console.log(formObject);
  const [inputTextColor1, setInputTextColor1] = useState('#97AEB0');
  const [inputTextColor2, setInputTextColor2] = useState('#97AEB0');
  const [openPicker1, setOpenPicker1] = useState(false);
  const [openPicker2, setOpenPicker2] = useState(false);
  const [showInvalidDate, setShowInvalidDate] = useState(false);
  const [showInputReminder, setShowInputReminder] = useState(true);
  const [showSubmitSucceeded, setShowSubmitSucceeded] = useState(false);
  const [showInputNotFilled, setShowInputNotFilled] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [leaveType, setLeaveType] = useState([] as any);

  useEffect(() => {
    // fetch the leave type
    async function fetchLeaveType() {
      try {
        const options = {method: 'GET'};
        let res = await fetch(
          `${Config.REACT_APP_BACKEND_URL}/ios-app/leaveType`,
          options,
        );
        let leave = await res.json();
        leave = leave['res'];

        setLeaveType(leave);
      } catch {
        console.log('fetch fail');
      }
    }
    fetchLeaveType();
    // console.log(leaveType);

    //Check the input of the applcation
    if (formObject.startDate === 'Please select a start date') {
      return;
    }
    checkLeaveApplicationInput();
  }, [formObject]);

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
          value={userId.toString()}
          placeholder="Please type your employee id"
          // onChangeText={text => {
          //   setFormObject({...formObject, employeeID: text});
          //   checkLeaveApplicationInput();
          // }}
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
            items={leaveType.map((data: any) => {
              return {label: data.type, value: data.id};
            })}
            // items={[
            //   {label: 'Annual Leave', value: 'Annual Leave'},
            //   {label: 'Sick Leave', value: 'Sick Leave'},
            //   {label: 'Maternity Leave', value: 'Maternity Leave'},
            // ]}
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
    backgroundColor: GlobalStyles.colors.inputColor,
    padding: 8,
    borderRadius: 30,
    fontSize: 18,
    color: 'black',
    // placeholderColor: '#8DACAE',
    // placeholderColor: 'red',
  },
});
