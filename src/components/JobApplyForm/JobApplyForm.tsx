import React, { useState } from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'
import { BasicInput, FileInput, SelectInput, FormWrapper, CheckboxInput, Fields } from './Parts'
import { submitApplication } from '@lib'

// For the container of all of the inputs within the form
// This is mainly used to automate the spacing between each of the inputs within the container

const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

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

interface FormProps {
  questions: Question[]
  compliance: any[]
  jobId: string | number
}

// ---------- This is the end of declarations ---------- //

export const JobApplyForm = ({ questions, compliance, jobId }:FormProps) => {
  const [ values, setValues ] = useState<{[ key: string ]: any }>({});
  const handleSubmit = async () => { await submitApplication({ endpoint: "/api/applicationSubmit", jobId, values })}

  const filteredCompliance = compliance.filter((complianceItem: { questions: Question[] }) => {
    return complianceItem.questions.some((question: Question) => 
        question.label.includes('Race') || question.label.includes('Gender')
    )
  })

  const handleInputChange = (questionIndex: number, fieldIndex: number, value: any) => {
    setValues(prevValues => ({
      ...prevValues,
      [`${questionIndex}-${fieldIndex}`]: value
    }))
  }

  const RenderQuestion = ({ question, questionIndex }: { question: Question, questionIndex: number }) => {
    return (

      <div key={`question-${ questionIndex }`}>
        { question.fields.map(( field, fieldIndex ) => {
          const inputName = `${ questionIndex }-${ fieldIndex }`;
          switch ( field.type ) {
            case "input_text" :
            return (

              <BasicInput 
                key={ fieldIndex }
                active={ Boolean( values[`${ questionIndex }-0`] )}
                label={ question.label }
                name={ field.name }
                required={ question.required }
                value={ values[ inputName ] || '' }
                onChange={(e: any) => handleInputChange( questionIndex, fieldIndex, e.target.value )}
              />

            )
            
            case "input_file" :
            return (

              <FileInput 
                key={ fieldIndex }
                required={ question.required }
                label={ question.label }
                name={ field.name }
              />

            )

            case "multi_value_single_select":
            return (

              <SelectInput 
                key={ fieldIndex }
                defaultValue="Select"
                label={ question.label }
                name={ question.label }
                options={ field.values.map( option => ({
                  title: option.label, 
                  value: option.value 
                }))}
              />

            )

            case "multi_value_multi_select":
            return (

              <CheckboxInput
                key={fieldIndex}
                label={question.label}
                name={field.name}
                values={field.values}
                selectedValues={values[inputName]}
                onChange={(updatedValues) => handleInputChange(questionIndex, fieldIndex, updatedValues)}
              />

            )
            
            default:
            return null;
          }
        })}
      </div>
    )
  }

  return (

    <FormWrapper onSubmit={ handleSubmit }>
      <InputContainer>
        {questions.map((question, i) => (
          <div key={`question-${i}`}>
            {question.fields.map((field, fieldIndex) => (

              <Fields 
                key={ fieldIndex } 
                field={ field } 
                fieldIndex={ fieldIndex }
                value={ values[`${ i }-${ fieldIndex }`] || '' } 
                questionLabel={ question.label } 
                handleInputChange={( index, val ) => handleInputChange( i, index, val )}
              />
          
            ))}
          </div>
        ))}
      </InputContainer>

      <Text>
        <Heading bold="heavy" size="l2" title="US Equal Opportunity Employer Statement" />

        <p>
          Continuum Capital is an equal opportunity employer that is commited to diversity and inclusion in the workplace. We 
          prohibit discrimination and harassment of any kind based on race, color, sex, religion, sexual orientation, national origin, 
          disability, genetic information, pregnancy, or any other protected characteristic as outlined by federal, state, or local laws.
        </p>

        <p>
          This policy applies to all employment practices within our organization, including hiring, recruiting, promotion, termination,
          layoff, recall, leave of absence, compensation, benefits, training, and apprenticeship. Continuum Capital makes hiring 
          decisions based solely on qualifications, merit, and business needs at the time.
        </p>
      </Text>
      
      { filteredCompliance.map(( complianceItem, index ) => (
        <div key={`compliance-${ index }`}>
          <InputContainer>
            { complianceItem.questions && complianceItem.questions.map(( nestedQuestion:any, nestedQuestionIndex:any ) => (

              <RenderQuestion 
                key={ nestedQuestionIndex } 
                question={ nestedQuestion } 
                questionIndex={ nestedQuestionIndex } 
              />

            ))}
          </InputContainer>
        </div>
      ))}
    </FormWrapper>

  ) 
}

export default JobApplyForm
