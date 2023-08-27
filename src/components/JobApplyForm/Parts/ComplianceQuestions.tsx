import React from 'react'
import { Fields } from './'

// -------------- Typescript declarations -------------- //

interface CustomField {
  name: string
  type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select' | 'multi_value_single_select'
  values: any[]
  required: boolean
}

interface Question {
  description: string | null
  label: string
  required: boolean
  fields: CustomField[]
  value: string
}

interface RenderQuestionProps {
  question: Question;
  questionIndex: number;
  values: { [key: string]: any };
  handleInputChange: (questionIndex: number, fieldIndex: number, value: any) => void;
}

// ---------- This is the end of declarations ---------- //

export const ComplianceQuestions = ({ 
    question, 
    questionIndex, 
    values, 
    handleInputChange 
  }:RenderQuestionProps) => {

  return (
    <div key={`question-${ questionIndex }`}>
      { question.fields.map(( field, fieldIndex ) => (

        <Fields
          key={ fieldIndex } 
          field={ field }
          fieldIndex={ fieldIndex }
          value={values[`${ questionIndex }-${ fieldIndex }`] || ''}
          questionLabel={ question.label }
          handleInputChange={( index:any, val:any ) => handleInputChange( questionIndex, index, val )}
          required={ question.required }
        />

      ))}
    </div>
  );
};
