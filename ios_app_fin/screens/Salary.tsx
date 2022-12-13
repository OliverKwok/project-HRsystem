import {
  StyleSheet,
  Text,
  View,
  Button,
  RefreshControl,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Config} from 'react-native-config';
import {GlobalStyles} from '../constants/styles';
import Payslip from '../components/Payslip';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthState} from '../redux/auth/state';
import {logout} from '../redux/auth/actions';
import {RootState} from '../store';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Salary() {
  const userId = useSelector((state: RootState) => state.auth.user.id);
  // const userdsf = useSelector((state: RootState) => state.auth.user);
  // console.log(userdsf);

  const [payrollRecord, setPayrollRecord] = React.useState([]);
  const [showNoRecord, setShowNoRecord] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  // const [reloadBoolean, setReloadBoolean] = React.useState(false);

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
  //console.log(payrollRecord);

  useEffect(() => {
    async function checkLogin() {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getUserStatus/${userId}`,
        options,
      );

      let userInfo = await res.json();
      userInfo = userInfo['res'][0];
      let userStatus = userInfo['status'];
      console.log(userStatus, 'from salary 67');

      if (
        userStatus == 'terminated' ||
        userStatus == 'resigned' ||
        userStatus == 'retired'
      ) {
        dispatch(logout());
        Alert.alert("'No authorization to access the mobile app'");
        // console.log('hihi from app.tsx 108');
        return;
      }
    }
    // setReloadBoolean(!reloadBoolean);
    // checkLogin();
    fetchPayslip();
    // console.log('hi~');
  }, []);

  //console.log(payrollRecord);
  return (
    <View style={styles.pageContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%', flex: 1}}>
        {!payrollRecord || payrollRecord.length == 0 ? (
          <View style={styles.noRecordContainer}>
            <Text style={styles.noRecordText}>No Payslip Record</Text>
          </View>
        ) : (
          payrollRecord.map((data, index) => {
            return <Payslip data={data} key={index} />;
          })
        )}
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
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  noRecordContainer: {
    // height: 200,
    paddingTop: 100,
    flex: 1,
    width: '100%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  noRecordText: {
    fontSize: 25,
  },
});
function dispatch(arg0: {type: '@@auth/LOGOUT'}) {
  throw new Error('Function not implemented.');
}
