import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Pressable,
  ScrollView,
  RefreshControl,
  Modal,
} from 'react-native';
import Config from 'react-native-config';
import {GlobalStyles} from '../constants/styles';
import Leave from '../screens/Leave';
import SimpleModal from './SimpleModal';

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

function dateFormatter(dateString: string) {
  // Create a date object from a date string
  var date = new Date(dateString);

  // Get year, month, and day part from the date
  var year = date
    .toLocaleString('default', {year: 'numeric'})
    .replace('年', '');
  var month = date
    .toLocaleString('default', {month: '2-digit'})
    .replace('月', '');

  var day = date.toLocaleString('default', {day: '2-digit'}).replace('日', '');

  // Generate yyyy-mm-dd date string
  var formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
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

function LeaveRecord({
  data,
  fetchLeaveRecord,
}: {
  data: leaveRecordType;
  fetchLeaveRecord: () => Promise<void>;
}) {
  const [showCancel, setShowCancel] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [applicationID, setApplicationID] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisible = (bool: boolean) => {
    setIsModalVisible(bool);
  };

  useEffect(() => {
    setApplicationID(data.id);
  }, [data]);

  async function leaveCancelHandler() {
    const requestOptions = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: data.id,
      }),
    };

    let res = await fetch(
      `${Config.REACT_APP_BACKEND_URL}/ios-app/cancelLeave`,
      requestOptions,
    );
    let result = await res.json();
    console.log(result);

    fetchLeaveRecord();
  }

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
          <Text style={styles.leaveText}>{dateFormatter(data.start_date)}</Text>
          <Text style={{marginLeft: 10, fontSize: 18}}>
            {data.start_date_period.replace('_', ' ')}
          </Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>End date : </Text>
          <Text style={styles.leaveText}>{dateFormatter(data.end_date)}</Text>
          <Text style={{marginLeft: 10, fontSize: 18}}>
            {data.end_date_period.replace('_', ' ')}
          </Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={styles.leaveText}>Number of Working Days : </Text>
          <Text style={styles.leaveText}>{data.number_of_days}</Text>
        </View>
        <View style={styles.leaveDetailContainer}>
          <Text style={[styles.leaveText, {fontWeight: 'bold'}]}>
            Status :{' '}
          </Text>
          <Text style={[styles.leaveText, {fontWeight: 'bold'}]}>
            {data.status}
          </Text>
        </View>
        <View style={styles.leaveRemarksContainer}>
          <Text style={styles.leaveText}>Remarks : </Text>
          <Text style={styles.leaveRemarksText}>{data['remarks']}</Text>
        </View>
        <View style={styles.createTimeContainer}>
          <Text style={[styles.leaveText, {fontSize: 13}]}>
            {dataTimeFormatter(data['created_at'] as any)}
          </Text>
        </View>

        {data.status == 'pending' ? (
          <View style={styles.buttonContainerBig}>
            <Pressable
              onPress={() => {
                console.log(
                  'you are going to cancel this application',
                  data.id,
                );
                changeModalVisible(true);
              }}
              style={({pressed}) =>
                pressed ? styles.pressed : styles.ButtonContainer
              }>
              <View>
                <Text style={{fontSize: 20}}>Cancel</Text>
              </View>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                // nRequestClose={() => {
                //   changeModalVisible(false);
                // }}
              >
                <SimpleModal
                  changeModalVisible={changeModalVisible}
                  leaveCancelHandler={leaveCancelHandler}
                />
              </Modal>
            </Pressable>
          </View>
        ) : null}
      </View>

      {/* {showCancelPopup && ( */}
      {/* <BottomPopup
        show={showCancelPopup}
        title="Cancel Confirmation"
        animationType={'slide'}
        closePopup={close}
        data={popupList}
        haveOutsideTouch={true}
      /> */}
      {/* )} */}
    </View>
  );
}

export default LeaveRecord;

const styles = StyleSheet.create({
  LeaveBigContainer: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
  },

  leaveItemContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#A8ABB6',
    padding: 15,
    borderRadius: 20,
    width: '95%',
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
  },
  leaveDetailContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  leaveRemarksContainer: {
    flexDirection: 'column',
    marginTop: 4,
  },

  leaveRemarksText: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
  },
  leaveText: {
    fontSize: 18,
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  buttonContainerBig: {
    // borderWidth: 1,
    height: '15%',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.6,
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
    borderWidth: 1,
    width: '30%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#CD2C25',
    marginTop: 10,
  },

  ButtonContainer: {
    opacity: 0.6,
    borderWidth: 1,
    width: '30%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E67067',
    marginTop: 10,
  },

  createTimeContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
  },
});
