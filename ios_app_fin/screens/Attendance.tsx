import {useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {AuthState} from '../redux/auth/state';
import Config from 'react-native-config';
import EventItem from '../components/EventItem';
import AttendanceRecord from '../components/AttendanceRecord';

interface itemType {
  id: number;
  event_name: string;
  date: string;
  details: string;
}

interface attendanceType {
  date: string;
  employee: number;
  id: number;
  status: string;
  time_checkedin: string;
  time_checkedout: string;
}

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Attendance() {
  const today = new Date().toISOString().split('T')[0];
  const userId = useSelector((state: AuthState) => state.auth.user.id);

  let userID = userId;

  const [companyEvent, setCompanyEvent] = useState([] as any);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [attendanceRecord, setAttendanceRecord] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCompanyEvent();
    getAttendance();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function getCompanyEvent() {
    try {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getEvent`,
        options,
      );

      let event = await res.json();
      event = event['res'];
      setCompanyEvent(event);
    } catch {
      console.log('fetch fail');
    }
  }
  async function getAttendance() {
    try {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getAttendance/${userID}`,
        options,
      );

      let attendance = await res.json();
      attendance = attendance['res'];

      setAttendanceRecord(attendance);
    } catch {
      console.log('fetch fail');
    }
  }

  useEffect(() => {
    getCompanyEvent();
    getAttendance();
  }, []);
  // console.log(attendanceRecord);

  function dateFormatter(dateString: string) {
    // Create a date object from a date string
    var date = new Date(dateString);

    // Get year, month, and day part from the date
    var year = date.toLocaleString('default', {year: 'numeric'});
    var month = date.toLocaleString('default', {month: '2-digit'});
    var day = date.toLocaleString('default', {day: '2-digit'});

    // Generate yyyy-mm-dd date string
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
  }

  // console.log(dateFormatter(companyEvent[6]['date']));
  // console.log(companyEvent[6]['date']);
  // console.log(dateFormatter(companyEvent[6]['date']));
  let selectedEvent = companyEvent.filter((data: any) => {
    return dateFormatter(data.date) == selectedDate;
  });

  let selectedAttendance = attendanceRecord.filter((data: any) => {
    return dateFormatter(data.date) == selectedDate;
  })[0];

  // console.log(selectedAttendance);

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
              {selectedEvent.map((data: itemType, index: number) => {
                return <EventItem data={data} index={index} key={index} />;
              })}
            </View>
            <View style={styles.eventContainer}>
              <Text style={{fontSize: 20}}> Attendance : </Text>
              <AttendanceRecord data={selectedAttendance} />
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
    height: '20%',
    // flex: 1,
    // borderWidth: 1,
  },

  activityBigContainer: {height: '100%'},

  eventContainer: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 15,
    height: '150%',
    flex: 1,
    // flexDirection: 'row',
  },
});
