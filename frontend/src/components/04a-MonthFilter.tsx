import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const colourOptions = [
  { value: '2022-08', label: '2022-08' },
  { value: '2022-09', label: '2022-09' },
  { value: '2022-10', label: '2022-10' },
  { value: '2022-11', label: '2022-11' },
  { value: '2022-12', label: '2022-12' }
]

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={colourOptions}
    />
  );
}