import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import NotificationItem from '../components/NotificationItem';
import {GlobalStyles} from '../constants/styles';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Notification() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function getNotifications() {
    try {
      const options = {method: 'GET'};
      let res = await fetch(
        `${Config.REACT_APP_BACKEND_URL}/ios-app/getNotification`,
        options,
      );

      let notifications = await res.json();
      notifications = notifications['res'];

      notifications.sort((a: any, b: any) => {
        if (a.id > b.id) {
          return -1;
        }
        return 1;
      });

      setNotifications(notifications);
    } catch {
      console.log('fetch fail');
    }
  }
  // console.log(notifications);

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <View style={styles.bigPageContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%', flex: 1}}>
        {notifications.map((notifItem, index) => {
          return <NotificationItem key={index} data={notifItem} />;
        })}
      </ScrollView>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  bigPageContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 3,
  },
  textContainer: {
    fontSize: 20,
    marginRight: 30,
  },
});
