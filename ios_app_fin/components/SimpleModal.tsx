import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

function SimpleModal(props: {
  changeModalVisible: (bool: boolean) => void;
  leaveCancelHandler: () => void;
}) {
  const closeModal = (bool: boolean) => {
    props.changeModalVisible(bool);
  };

  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={[styles.text, {fontSize: 20}]}>Confirm to cancel?</Text>
          <Text style={styles.text}>This action cannot be reversed</Text>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              closeModal(false);
            }}>
            <Text style={[styles.text, {color: 'blue'}]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              closeModal(false);
              props.leaveCancelHandler();
            }}>
            <Text style={[styles.text, {color: 'blue'}]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SimpleModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(241, 247, 247, 0.6)',
  },

  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 60,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // backgroundColor: GlobalStyles.colors.backgroundColor,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsView: {
    width: '100%',
    flexDirection: 'row',
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
