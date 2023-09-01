import React from 'react'
import { styled } from '@theme'
import { FormWrapper, Fields, StandardQuestions, ComplianceQuestions } from './Parts'
import { Text, Heading } from '@components'
import { submitApplication } from '@lib'

// For the container of all of the inputs within the form
// This is mainly used to automate the spacing between each of the inputs within the container

const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// -------------- Typescript declarations -------------- //

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
  questions: Question[]
  compliance: ComplianceItem[]
  jobId: string | number
}

// ---------- This is the end of declarations ---------- //

export const JobApplyForm = ({ 
  questions,
  compliance,
  jobId
}: FormProps) => {

  const handleSubmit = async (formData: any) => {
    submitApplication(formData, questions, compliance, jobId);
  }

  return (

    <FormWrapper onSubmit={ handleSubmit }>
      <InputContainer>
        <StandardQuestions questions={questions} />
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

      <InputContainer>
        <ComplianceQuestions compliance={compliance} />
      </InputContainer>
    </FormWrapper>

  )
}
