import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

function NotificationItem() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.monthContainer}>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>YYYY/MM : </Text>
          <Text style={styles.salaryText}>2022/11</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>Salary : </Text>
          <Text style={styles.salaryText}>dsafads</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>MPF contributed by employee :</Text>
          <Text style={styles.salaryText}></Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>Final amount : </Text>
          <Text style={styles.salaryText}></Text>
        </View>
      </View>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, padding: 20, alignItems: 'center'},

  monthContainer: {
    borderWidth: 1,
    padding: 20,
    width: '100%',
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
    borderRadius: 10,
  },
  salaryDetailContainer: {
    flexDirection: 'row',
    margin: 2,
  },
  salaryText: {
    fontSize: 18,
  },
});
