import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { styled } from '@theme'
import { FormHeader } from './Parts/FormHeader'
import { Button } from '@components'

// For the master container of the form, within the Apply for Job section
// This holds all of the questions needed to be supplied when applying for a position

const FormWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

// For the container of all of the content within the master container
// This holds all of the titles and the input forms

const FormContent = styled('div', {
  position: 'relative',
  maxWidth: 1400,
  width: '100%',
  margin: '0 auto',
  padding: '68px',
  background: '#000',
  borderRadius: '$r2',
  '> *:not(:last-child)': { marginBottom: 50 },

  '@tablet': { 
    padding: '50px 40px',
    '> *:not(:first-child, :last-child)': { marginBottom: 12 },
  },

  // Here we are suporting various widths of the form
  // This is to support a larger or smaller width than the default that the component comes with

  variants: {
    width: { l0: { maxWidth: 640 }},
    spacing: { l1: { padding: '150px 0 50px' }}
  }
})

// For the container of all of the inputs within the form
// This is inbetween the header on the top and the submit button on the bottom of the container

const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the container of the submit button - this is just a wrapper container
// We need this to be able to place the button on the right of the container

const SubmitButton = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  '@mobile': { '*': { width: '100%' }}
})

// -------------- Typescript declarations -------------- //

interface FormProps {
  id?: string
  width?: 'l0'
  spacing?: 'l1'
  title?: any
  titleSize?: 'l0'
  alignTitle?: 'center',
  encType?: any
  method?: any
  hasCustomSubmit?: boolean
  children?: React.ReactNode
  onSubmit: any
  submitButtonTitle?: string
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    id, // Optional - For the ID of the form, such as if it needs an anchor link for a button click
    width, // Optional - Supporting various widths other than the default width
    spacing, // Optional - Supporting top and bottom spacing for the form container
    title, // Required - For the title of the form
    titleSize, // Optional - Supporting various sizes for the title of the form
    alignTitle, // Optional - Supporting various alignments of the title within the container
    encType, // Optional - Supporting form requirements for forms coming from API calls like Greenhouse
    method, // Required - For the method type of the form (i.e. POST )
    hasCustomSubmit, // Optional - Removes the default submit button on the bottom of the container
    children, // Required - For the input content within the form
    onSubmit, // Required - THe action that happens once the form is submitted
    submitButtonTitle // Optional - If the button of a form needs a different title
  }: FormProps ) => {

  const methods = useForm()
  const { watch } = methods
  
  return(

    <FormWrap {...{ id }}>
      <FormProvider { ...methods } watch={ watch }>
        <form noValidate {...{ encType, method }} onSubmit={ methods.handleSubmit( onSubmit ) }>

          <FormContent {...{ width, spacing }}>
            <FormHeader {...{ title, titleSize }} />
            <InputContainer>{ children }</InputContainer>

            { hasCustomSubmit ?? (
              <SubmitButton>
                <Button variant="primary" type="submit" title={ submitButtonTitle || 'Submit' } />
              </SubmitButton>
            )}
          </FormContent>

        </form>
      </FormProvider>
    </FormWrap>

  )
}