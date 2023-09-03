import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm } from '@components'

// For the master container of the Checkbox array
// This contains

const Checkboxes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 50,
  '> *:not(:last-child)': { marginBottom: 12 },

  // For the container of the check

  input: {
    position: 'relative',
    width: 32,
    height: 32,
    borderRadius: '$r0',
    border: '1px solid $border',
    appearance: 'none'
  }
})

const Checkbox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexDirection: 'row-reverse',
  position: 'relative',
  '> *:not(:last-child)': { marginLeft: 8 }
})

interface Props {
  label: string;
  name: string;
  values: { label: string; value: any }[];
  selectedValues?: any[];
  onChange: (newValues: any[]) => void;
  required?: boolean;
}

export const CheckboxInput: React.FC<Props> = ({ 
    label, 
    name, 
    values, 
    selectedValues, 
    onChange, 
    required 
  }) => {
    
  const handleCheckboxChange = (value: any, checked: boolean) => {
    const updatedValues = [...(selectedValues || [])];
    if (checked) {
      updatedValues.push(value);
    } else {
      const index = updatedValues.indexOf(value);
      if (index > -1) {
        updatedValues.splice(index, 1);
      }
    }
    onChange(updatedValues);
  }

  return (
    <Checkboxes>
      <fieldset>
        <Heading title={label} />
        {required && <TextEm color="danger">*</TextEm>}
      </fieldset>

      <div>
        {values.map((option) => (

          <Checkbox key={option.value}>
            <label>{option.label}</label>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
              checked={(selectedValues || []).includes(option.value)}
            />
          </Checkbox>

        ))}
      </div>
    </Checkboxes>
  )
}