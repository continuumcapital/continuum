import React from 'react'
import { BasicInput, FileInput, SelectInput, CheckboxInput } from './index'

// -------------- Typescript declarations -------------- //

type Field = {
  name: string
  type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select' | 'multi_value_single_select'
  values: any[]
  required?: boolean
}

interface FieldProps {
  label: string
  name: string
  required?: boolean


  field: Field, 
  fieldIndex?: number,
  value?: any, 
  questionLabel?: string, 
  handleInputChange?: ( fieldIndex: number, value: any ) => void 
  
}

// ---------- This is the end of declarations ---------- //

export const Fields = ({ 
    label,
    name,


    field, 
    fieldIndex, 
    value, 
    questionLabel, 
    handleInputChange,
    required
  }:FieldProps) => {

  switch ( field.type ) {
    case "input_text" : return ( <BasicInput {...{ label, name, required }} /> )
    // case "input_file" : return ( <FileInput {...{ label, name, required }} /> )

    // case "multi_value_single_select" :
    // return (

    //   <SelectInput 
    //     defaultValue="Select" 
    //     options={ field.values.map( option => ({ title: option.label, value: option.value }))} 
    //     {...{ label, name }}
    //   />

    //   // <SelectInput 
    //   //   defaultValue="Select"
    //   //   label={ questionLabel }
    //   //   name={ field.name }
    //   //   options={ field.values.map( option => ({
    //   //     title: option.label,
    //   //     value: option.value 
    //   //   }))} 
    //   // />

    // )

    // case "multi_value_multi_select" :
    // return (

    //   <CheckboxInput
    //     label={ questionLabel }
    //     name={ field.name }
    //     values={ field.values }
    //     selectedValues={ value }
    //     onChange={( updatedValues ) => handleInputChange( fieldIndex, updatedValues )}
    //   />

    // )

    default:
    return null
  }
}
