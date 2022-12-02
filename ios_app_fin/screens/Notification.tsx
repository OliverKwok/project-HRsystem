import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import NotificationItem from '../components/NotificationItem';
import {GlobalStyles} from '../constants/styles';

const wait = (timeout: any) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

function Notification() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.bigPageContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{width: '100%', flex: 1}}>
        <NotificationItem />
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
