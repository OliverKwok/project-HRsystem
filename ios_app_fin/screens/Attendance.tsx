import {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {GlobalStyles} from '../constants/styles';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Attendance() {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  //   console.log(selectedDate);

  // scroll down and refresh
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.pageBigContainer}>
      <Calendar
        //   initialDate={`${new Date().toISOString().split("T")[0]}`}
        //   current="2022-11-23"
        minDate="2010-01-01"
        maxDate={`${new Date().getFullYear() + 1}-12-31`}
        disableAllTouchEventsForDisabledDays={true}
        onDayPress={day => {
          //   console.log("selected day", day.dateString);
          setSelectedDate(day.dateString);
        }}

        //   markedDates={selectedDate.selection.day:{
        //     selected: true}}
      />

      <View style={styles.bottomPartContainer}>
        <ScrollView
          style={styles.ScrollViewContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={styles.dateContainer}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              {selectedDate}
            </Text>
          </View>
          <View style={styles.activityBigContainer}>
            <View style={styles.eventContainer}>
              <Text style={{fontSize: 20}}>Events : </Text>
            </View>
            <View style={styles.eventContainer}>
              <Text style={{fontSize: 20}}> Attendance : </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Attendance;

const styles = StyleSheet.create({
  pageBigContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },

  bottomPartContainer: {
    marginTop: 10,
    flex: 1,
    // borderWidth: 3,
  },

  ScrollViewContainer: {
    flex: 1,
    // borderWidth: 1,
    // margin: 10,
  },

  dateContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    // flex: 1,
    // borderWidth: 1,
  },

  activityBigContainer: {height: '100%'},

  eventContainer: {
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 15,
    height: '150%',
    flex: 1,
  },
  // attendanceContainer: {
  //   // alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: '#C0C0C0',
  //   padding: 10,
  //   flex: 1,
  // },
});
