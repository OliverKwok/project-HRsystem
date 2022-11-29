import React, {useEffect} from 'react';
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
  RefreshControl,
} from 'react-native';
import {Config} from 'react-native-config';
import RNPickerSelect from 'react-native-picker-select';
import {PickerSelect} from '../components/PickerSelect';
import LeaveApplication from './LeaveApplication';
import {GlobalStyles} from '../constants/styles';
import LeaveRecord from '../components/LeaveRecord';

// import {ScrollView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = StackNavigate();

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Leave({navigation}: any) {
  // const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [leaveRecord, setLeaveRecord] = React.useState([]);
  const [showNoRecord, setShowNoRecord] = React.useState(true);
  // const [showNoRecord, setShowNoRecord] = React.useState(false);

  useEffect(() => {
    let userID = 12;

    // Fetch all the leave application record
    async function fetchLeaveRecord() {
      try {
        const options = {method: 'GET'};
        let res = await fetch(
          `${Config.REACT_APP_BACKEND_URL}/ios-app/leaveRecord/${userID}`,
          options,
        );

        let leave = await res.json();

        leave = leave['res'];

        setLeaveRecord(leave);
      } catch {
        console.log('fetch fail');
      }
    }
    fetchLeaveRecord();
  }, []);
  console.log(leaveRecord);

  // navigate to application form
  function leavePressHandler() {
    navigation.navigate('LeaveApplication');
  }

  // scroll down and refresh
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%'}}>
        <View style={styles.scrollViewContainer}>
          {leaveRecord.length == 0 ? (
            <View style={styles.noRecordContainer}>
              <Text style={styles.noRecordText}>
                No Leave Application Record
              </Text>
            </View>
          ) : (
            leaveRecord.map((leaveDate, index) => {
              return <LeaveRecord data={leaveDate} key={index} />;
            })
          )}
          {/* {leaveRecord.map(leaveDate => {
            return <LeaveRecord data={leaveDate} key={leaveDate['id']} />;
          })}

          {showNoRecord ? (
          ) : null} */}
        </View>
      </ScrollView>
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
    width: '100%',
    backgroundColor: GlobalStyles.colors.backgroundColor,
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
    marginTop: 10,
  },

  scrollViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '20%',
    flex: 1,
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

  noRecordContainer: {
    // height: 200,
    paddingTop: 100,
    flex: 1,
    width: '90%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  noRecordText: {
    fontSize: 25,
  },
});
