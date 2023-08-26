import React from 'react'
import { BasicInput, FileInput, SelectInput, CheckboxInput } from './index'

type Field = {
  name: string;
  type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select' | 'multi_value_single_select';
  values: any[];
  required?: boolean;
};

interface FieldProps {
  field: Field, 
  fieldIndex: number,
  value: any, 
  questionLabel: string, 
  handleInputChange: ( fieldIndex: number, value: any ) => void 
}

export const Fields = ({ 
    field, 
    fieldIndex, 
    value, 
    questionLabel, 
    handleInputChange 
  }:FieldProps) => {

  switch ( field.type ) {
    case "input_text":
    return (

      <BasicInput 
        active={ Boolean( value )}
        label={ questionLabel }
        name={ field.name }
        required={ field.required }
        value={ value || '' }
        onChange={( e: any ) => handleInputChange( fieldIndex, e.target.value )}
      />

    )

    case "input_file" :
    return (

      <FileInput 
        required={ field.required }
        label={ questionLabel }
        name={ field.name }
      />

    )

    case "multi_value_single_select" :
    return (

      <SelectInput 
        defaultValue="Select"
        label={ questionLabel }
        name={ field.name }
        options={ field.values.map( option => ({
          title: option.label,
          value: option.value 
        }))} 
      />

    )

    case "multi_value_multi_select" :
    return (

      <CheckboxInput
        label={ questionLabel }
        name={ field.name }
        values={ field.values }
        selectedValues={ value }
        onChange={( updatedValues ) => handleInputChange( fieldIndex, updatedValues )}
      />

    )

    default:
    return null
  }
}
