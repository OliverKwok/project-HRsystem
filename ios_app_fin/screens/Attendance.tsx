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
} from 'react-native';

function Attendance() {
  const today = new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0],
  );

  //   console.log(selectedDate);

  return (
    <>
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
        <View style={styles.dateContainer}>
          <Text
            style={{
              fontSize: 27,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}>
            {selectedDate}
          </Text>
        </View>
        <ScrollView style={{height: 'auto'}}>
          <View style={styles.eventContainer}>
            <Text style={{fontSize: 20}}>Events : </Text>
          </View>
          <View style={styles.attendanceContainer}>
            <Text style={{fontSize: 20}}> Attendance : </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Attendance;

const styles = StyleSheet.create({
  bottomPartContainer: {
    margin: 10,
    // flex: 1,
    height: 500,
    // borderWidth: 2,
  },
  dateContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign: "center",
    height: '14%',
    // borderWidth: 1,
  },
  eventContainer: {
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 10,
    // height: '70%',
    flex: 1,
  },
  attendanceContainer: {
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 10,
    flex: 1,
  },
});
