import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import {GlobalStyles} from '../constants/styles';
import {logout} from '../redux/auth/actions';
import {useAppDispatch, useAppSelector} from '../store';

function Profile() {
  const userId = useAppSelector(state => state.auth['user']['id']);
  const dispatch = useAppDispatch();
  const [profile, setProfile] = useState([]);
  const logoutHandler = () => {
    dispatch(logout());
  };

  // date formatter
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

  // get profile
  async function getProfile() {
    try {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getProfile/${userId}`,
        options,
      );

      let profileList = await res.json();

      profileList = profileList['res'];

      setProfile(profileList[0]);
    } catch {
      console.log('fetch fail');
    }
  }
  // console.log(profile);

  useEffect(() => {
    getProfile();
  }, []);

  // console.log(profile);

  // let jobNature = profile['job_nature'].replace('_', ' ');

  return (
    <View style={styles.bigPageContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemText, styles.firstColumn]}>
            Employee ID :
          </Text>
          <Text
            style={[styles.itemText, styles.backerText, styles.firstColumn]}>
            {profile['employeeid']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Last Name :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['last_name']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>First Name :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['first_name']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Gender : </Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['gender']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Work Phone no. :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['work_phone_no']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Date of Birth :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {dateFormatter(profile['date_of_birth'])}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Email :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['email_work']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Status :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['status']}
          </Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Annual Leave Taken :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['al_leave_taken']}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Annual Leave Entitled :</Text>
          <Text style={[styles.itemText, styles.backerText]}>
            {profile['al_leave_entitled_peryear']}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={logoutHandler}
        style={({pressed}) =>
          pressed ? styles.pressed : styles.ButtonContainer
        }>
        <View>
          <Text style={{fontSize: 20}}>Log out</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  bigPageContainer: {
    backgroundColor: GlobalStyles.colors.backgroundColor,
    // borderWidth: 1,
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileContainer: {
    // borderWidth: 1,
    height: '60%',
    width: '100%',
    marginTop: -80,
    marginBottom: 70,
    padding: 30,
    backgroundColor: GlobalStyles.colors.backgroundColorDarker,
    borderRadius: 25,
  },
  firstColumn: {
    fontWeight: 'bold',
  },
  itemContainer: {flexDirection: 'row', marginBottom: 10},
  itemText: {fontSize: 18},
  backerText: {
    marginLeft: 10,
  },
  ButtonContainer: {
    borderWidth: 1,
    // flex: 1,
    width: '40%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#E67067',
    opacity: 0.7,
  },

  pressed: {
    opacity: 0.7,
    backgroundColor: '#CD2C25',
    borderWidth: 1,
    width: '40%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    transform: [{scaleX: 1.1}, {scaleY: 1.1}],
  },
});
