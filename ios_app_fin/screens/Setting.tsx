import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';
import {logout} from '../redux/auth/actions';
import {useAppDispatch} from '../store';

function Setting() {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.bigPageContainer}>
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

export default Setting;

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
