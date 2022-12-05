import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

interface notifType {
  id: number;
  date: null;
  time: null;
  title: string;
  message: string;
  message_type: string;
  recipient: string;
  created_at: string;
}

function dataTimeFormatter(dateTimeString: string) {
  // Create a date object from a date string
  var date = new Date(dateTimeString);

  // Get year, month, and day part from the date
  var year = date
    .toLocaleString('default', {year: 'numeric'})
    .replace('年', '');
  var month = date
    .toLocaleString('default', {month: '2-digit'})
    .replace('月', '');

  var day = date.toLocaleString('default', {day: '2-digit'}).replace('日', '');

  let date_of_dateTimeString = year + '-' + month + '-' + day;
  let time_of_dateTimeString = new Date(dateTimeString)
    .toTimeString()
    .split(' ')[0];
  let final_date_time = date_of_dateTimeString + ' ' + time_of_dateTimeString;
  return final_date_time;
}

function NotificationItem({data}: {data: notifType}) {
  // console.log(data);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.monthContainer}>
        <View style={styles.notifDetailContainer}>
          <Text style={styles.notifTitle}>{data.title}</Text>
        </View>
        <View style={styles.notifDetailContainer}>
          <Text style={styles.notifText}>{data.message}</Text>
        </View>
        <View style={styles.createTimeContainer}>
          <Text style={styles.timeText}>
            {dataTimeFormatter(data.created_at)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, padding: 20, alignItems: 'center'},

  monthContainer: {
    // borderWidth: 1,
    padding: 15,
    width: '100%',
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
    borderRadius: 10,
    justifyContent: 'center',
  },
  notifDetailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  notifTitle: {
    fontSize: 24,
    width: '100%',
    fontWeight: 'bold',
  },
  notifText: {
    fontSize: 18,
  },

  createTimeContainer: {
    width: '100%',
    marginBottom: -5,
    marginTop: 10,
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 13,
  },
});
