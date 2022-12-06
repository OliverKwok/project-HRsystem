import {StyleSheet, Text, View, Button, RefreshControl} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Config} from 'react-native-config';
import {GlobalStyles} from '../constants/styles';
import Payslip from '../components/Payslip';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthState} from '../redux/auth/state';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Salary() {
  const userId = useSelector((state: AuthState) => state.auth.user.id);
  const [payrollRecord, setPayrollRecord] = React.useState([]);
  const [showNoRecord, setShowNoRecord] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchPayslip();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function fetchPayslip() {
    let userID = userId;
    try {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getPayslip/${userID}`,
        options,
      );

      let payroll = await res.json();

      payroll = payroll['res'];

      setPayrollRecord(payroll);
    } catch {
      console.log('fetch fail');
    }
  }

  useEffect(() => {
    fetchPayslip();
  }, []);

  console.log(payrollRecord);
  return (
    <View style={styles.pageContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%', flex: 1}}>
        {payrollRecord.map((data, index) => {
          return <Payslip data={data} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}

export default Salary;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
});
