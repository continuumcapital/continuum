import React from 'react'
import { BasicInput, FileInput, SelectInput } from '@components'

// -------------- Typescript declarations -------------- //

interface FieldProps {
  field: {
    name: string
    type: 'input_text' | 'input_file' | 'multi_value_multi_select' | 'multi_value_single_select'
    values: any[]
    required?: boolean
  }
  label: string;
  required?: boolean;
}

// ---------- This is the end of declarations ---------- //

export const Fields = ({ field, label, required }:FieldProps) => {
  switch ( field.type ) {
    case 'input_text' :
    return (

      <BasicInput
        label={ label }
        name={ field.name }
        required={ required }
      />

    )

    case 'input_file' :
    return (

      <FileInput
        label={ label }
        name={ field.name }
        required={ required }
      />

    )

    case 'multi_value_single_select' :
    return (

      <SelectInput 
        label={ label }
        name={ field.name }
        defaultValue="Select one"
        options={ field.values.map( val => ({ 
          title: val.label, 
          value: val.value 
        }))}
      />

    )

    default :
    return null

  }
}
