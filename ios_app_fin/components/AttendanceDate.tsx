import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface holidayNameType {
  id: number;
  date: string;
  holiday_name: string;
}

function AttendanceDate({
  selectedDate,
  data,
}: //   dateFormatter,
{
  selectedDate: string;
  data: Array<holidayNameType>;
  //   dateFormatter: (date: string) => string;
}) {
  const [holidayFinal, setHolidayFinal] = useState('');

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

  let holiday_name = data.filter((data: any) => {
    if (dateFormatter(data['date']) == selectedDate) {
      return data['holiday_name'];
    }
  });
  let holiday_final;
  if (holiday_name.length == 0) {
    holiday_final = '';
  } else {
    holiday_final = holiday_name[0]['holiday_name'];
  }

  //   console.log(holiday_name[0]['holiday_name']);

  //   let holiday_final = holiday_name[0]['holiday_name'];
  //   if (holiday_name[0]['holiday_name']) {
  //     setHolidayFinal(holiday_name[0]['holiday_name']);
  //   } else {
  //     setHolidayFinal('');
  //   }

  return (
    <View style={styles.dateContainer}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        {selectedDate}
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: '#ff1010',
        }}>
        {holiday_final}
      </Text>
    </View>
  );
}

export default AttendanceDate;

const styles = StyleSheet.create({
  dateContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    // flex: 1,
    // borderWidth: 1,
  },
});
