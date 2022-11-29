import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import Leave from '../screens/Leave';

interface leaveRecordType {
  id: number;
  employee_id: number;
  leave_type: number;
  start_date: string;
  start_date_period: string;
  end_date: string;
  end_date_period: string;
  number_of_days: number;
  status: string;
  created_at: Date;
  updated_at?: Date;
  approved_by?: string;
  type: string;
}

function LeaveRecord({data}: {data: leaveRecordType}) {
  return (
    <View style={styles.LeaveBigContainer}>
      <View style={styles.leaveItemContainer}>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Application ID : </Text>
          <Text style={styles.leaveText}>{data.id}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Employee ID : </Text>
          <Text style={styles.leaveText}>{data.employee_id}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Leave Type : </Text>
          <Text style={styles.leaveText}>{data.type}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Start date : </Text>
          <Text style={styles.leaveText}>
            {new Date(data.start_date).toISOString().split('T')[0]}
          </Text>
          <Text style={{marginLeft: 15, fontSize: 18}}>
            {data.start_date_period.replace('_', ' ')}
          </Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>End date : </Text>
          <Text style={styles.leaveText}>
            {new Date(data.end_date).toISOString().split('T')[0]}
          </Text>
          <Text style={{marginLeft: 15, fontSize: 18}}>
            {data.end_date_period.replace('_', ' ')}
          </Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Number of Working Days : </Text>
          <Text style={styles.leaveText}>{data.number_of_days}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Status : </Text>
          <Text style={styles.leaveText}>{data.status}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Approved by : </Text>
          <Text style={styles.leaveText}>{data.approved_by}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Created at </Text>
          <Text style={styles.leaveText}>
            {new Date(data.created_at).toLocaleString()}
          </Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Updated at </Text>
          <Text style={styles.leaveText}>
            {!!data.updated_at
              ? new Date(data.updated_at).toLocaleString()
              : ''}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default LeaveRecord;

const styles = StyleSheet.create({
  LeaveBigContainer: {
    marginTop: 25,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
  },

  leaveItemContainer: {
    flex: 1,
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    width: '90%',
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
  },
  leaveDetailContainer: {
    flexDirection: 'row',
    margin: 2,
  },
  leaveText: {
    fontSize: 18,
  },
});
