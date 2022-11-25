import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

function IconButton({icon, size, color, onPress}: any) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionic name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {opacity: 0.75},
});
