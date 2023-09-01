import React from 'react'
import { Fields } from './Fields'

interface ComplianceQuestion extends Question {}

interface ComplianceItem {
  questions: ComplianceQuestion[];
}

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
  compliance: ComplianceItem[]
}

export const ComplianceQuestions = ({ compliance }:FormProps) => {
  return (
    <>
      {compliance.map((complianceItem) => {
        return complianceItem.questions.map((question) => {
          // Filter out questions that are neither "Race" nor "Gender"
          if (question.label !== 'Race' && question.label !== 'Gender') {
            return null;
          }

          return question.fields.map((field, i) => {
            return (
              <Fields 
                key={`field-${i}`}
                field={field}
                label={question.label}
                required={question.required}
              />
            );
          })
        })
      })}
    </>

  )
}
