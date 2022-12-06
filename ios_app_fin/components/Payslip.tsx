import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {GlobalStyles} from '../constants/styles';

interface payrollType {
  id: number;
  year: number;
  month: number;
  employeeid: number;
  basic_salary: number;
  ot_pay: number;
  bonus: number;
  nopay_leave: number;
  mpf_employee: number;
  total: number;
  mpf_employer: null;
}

function Payslip({data}: {data: payrollType}) {
  // console.log(data.year);
  // data['year'].toString();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.monthContainer}>
        <View style={styles.salaryDetailContainer}>
          <Text
            style={
              styles.titleText
            }>{`${data['year']} / ${data['month']}`}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>Basic Salary : </Text>
          <Text style={styles.salaryText}>{data['basic_salary']}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>OT payment : </Text>
          <Text style={styles.salaryText}>{data['ot_pay']}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>Bonus : </Text>
          <Text style={styles.salaryText}>{data['bonus']}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>Deduction : </Text>
          <Text style={styles.salaryText}>{`(${data['nopay_leave']})`}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.salaryText}>MPF contributed by employee :</Text>
          <Text style={styles.salaryText}>{data['mpf_employee']}</Text>
        </View>
        <View style={styles.salaryDetailContainer}>
          <Text style={styles.finalAmountText}>Final amount : </Text>
          <Text style={styles.finalAmountText}>{data['total']}</Text>
        </View>
      </View>
    </View>
  );
}

export default Payslip;

const styles = StyleSheet.create({
  pageContainer: {flex: 1, padding: 20, alignItems: 'center'},

  monthContainer: {
    // borderWidth: 1,
    padding: 20,
    width: '100%',
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
    borderRadius: 10,
  },
  salaryDetailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: -15,
    marginBottom: 7,
  },
  salaryText: {
    fontSize: 18,
  },

  finalAmountText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
