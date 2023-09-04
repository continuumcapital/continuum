import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { styled } from '@theme'
import { FormHeader } from './NewParts/FormHeader'
import { Button } from '@components'

// For the master container of the form, within the Apply for Job section
// This holds all of the questions needed to be supplied when applying for a position

const FormWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This holds all of the titles and the input forms

const FormContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  padding: '50px 0',
  '> *:not(:last-child)': { marginBottom: 32 },
  '@mobile': { padding: '75px 0 20px' },

  // Here we are suporting various widths of the form
  // This is to support a larger or smaller width than the default that the component comes with

  variants: {
    width: {
      l0: { maxWidth: 640 }
    }
  }
})

// For the container of all of the inputs within the form
// This is inbetween the header on the top and the submit button on the bottom of the container

const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// -------------- Typescript declarations -------------- //

interface FormProps {
  id?: string
  width?: 'l0'
  title?: any
  titleSize?: 'l0'
  alignTitle?: 'center',
  encType?: any
  method?: any
  removeRequired?: boolean
  children?: React.ReactNode
  onSubmit: any
  submitButtonTitle?: string
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    id,
    width,
    title,
    titleSize,
    alignTitle,
    encType,
    method,
    removeRequired,
    children,
    onSubmit,
    submitButtonTitle
  }: FormProps ) => {

  const methods = useForm()
  const { watch } = methods
  
  return(

    <FormWrap {...{ id }}>
      <FormProvider { ...methods } watch={ watch }>
        <form noValidate {...{ encType, method }} onSubmit={ methods.handleSubmit( onSubmit ) }>

          <FormContent {...{ width }}>
            <FormHeader {...{ title, titleSize, alignTitle, removeRequired }} />
            <InputContainer>{ children }</InputContainer>
            <Button variant="primary" type="submit" title={ submitButtonTitle || 'Submit' } />
          </FormContent>

        </form>
      </FormProvider>
    </FormWrap>

  )
}