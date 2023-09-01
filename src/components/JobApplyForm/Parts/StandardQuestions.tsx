import React from 'react'
import { Fields } from './Fields'

// -------------- Typescript declarations -------------- //

interface Field {
  name: string
  type: 'input_text' | 'input_file' | 'multi_value_single_select'
  values: any[]
  required: boolean
}

interface Question {
  name: string
  label: string
  required: boolean
  fields: Field[]
}

interface FormProps {
  questions: Question[]
}

// ---------- This is the end of declarations ---------- //

export const StandardQuestions = ({ questions }:FormProps) => {
  return (

    <>
      { questions.map(( question ) => {
        return question.fields.map((field, i) => {
          return (

            <Fields 
              key={`field-${i}`}
              field={ field }
              label={ question.label }
              required={ question.required }
            />

          )
        })
      })}
    </>
    
  )
}
