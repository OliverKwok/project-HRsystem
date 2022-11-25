import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

export const PickerSelect = () => {
  return (
    <RNPickerSelect
      onValueChange={value => console.log(value)}
      placeholder={{label: 'Select you duration', value: null}}
      useNativeAndroidPickerStyle={false}
      items={[
        {label: 'Full day', value: '1'},
        {label: 'First Half', value: '2'},
        {label: 'Second Half', value: 'hockey'},
      ]}
    />
  );
};
