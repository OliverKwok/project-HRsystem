import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface attendanceType {
  date: string;
  employee: number;
  id: number;
  status: string;
  time_checkedin: string;
  time_checkedout: string;
}

function AttendanceRecord({data}: {data: attendanceType}) {
  console.log('fk you', data);

  return data ? (
    <View style={styles.attendanceContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>Checkin Time :</Text>
        <Text style={styles.textContainer}>
          {new Date(data['time_checkedin']).toLocaleTimeString()}
        </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>Checkout Time :</Text>
        <Text style={styles.textContainer}>
          {new Date(data['time_checkedout']).toLocaleTimeString()}
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textContainer}>Status :</Text>
        <Text style={styles.textContainer}>{data['status']}</Text>
      </View>
    </View>
  ) : null;
}

export default AttendanceRecord;

const styles = StyleSheet.create({
  attendanceContainer: {
    padding: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 3,
  },
  textContainer: {
    fontSize: 20,
    marginRight: 10,
  },
});
