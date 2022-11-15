import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  // size: props.small ? 5 : undefined
}))`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;
`;

const colourOptions = [
  { value: '2022-08', label: '2022-08' },
  { value: '2022-09', label: '2022-09' },
  { value: '2022-10', label: '2022-10' },
  { value: '2022-11', label: '2022-11' },
  { value: '2022-12', label: '2022-12' }
]

const animatedComponents = makeAnimated();

export default function AnimatedMulti({ filterText, onFilter }: any) {
  return (
    <>
    <Input
    type="text"
    placeholder="Filter table data..."
    value={filterText}
    onChange={onFilter}
    />
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      options={colourOptions}


      />
      </>
// isMulti
// value={filterText}
// onChange={onFilter}

  );
}