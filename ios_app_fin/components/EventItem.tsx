import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface itemType {
  id: number;
  event_name: string;
  date: string;
  details: string;
}

function EventItem({data, index}: {data: itemType; index: number}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>{`${index + 1}. ${
        data.event_name
      }`}</Text>
      <Text style={styles.textContainer}>{data.details}</Text>
    </View>
  );
}

export default EventItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    // borderBottomWidth: 2,
    borderBottomColor: '#A8ABB6',
    padding: 3,
    width: '100%',
  },
  textContainer: {
    width: '50%',
    fontSize: 18,
    marginRight: 10,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});
