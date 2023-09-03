import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { styled } from '@theme'
import { Button } from '@components'
import { FormHeader } from './FormHeader'

// For the master container of the form, within the Apply for Job section
// This holds all of the questions needed to be supplied when applying for a position

const FormWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgPrimary'
})

// For the container of all of the content within the master container
// This holds all of the titles and the input forms

const FormContent = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '90%',
  margin: '0 auto',
  padding: '150px 0 50px',
  '> *:not(:last-child)': { marginBottom: 12 },
  '@mobile': { padding: '75px 0 20px' },

  variants: {
    width: {
      l0: { maxWidth: 640 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface FormProps {
  id?: string
  width?: 'l0'
  children: React.ReactNode
  onSubmit?: any
  encType?: any
  method?: any
  title: string
  titleSize?: 'l0'
  alignTitle?: 'center'
  removeRequired?: boolean
  submitButtonTitle?: string
}

// ---------- This is the end of declarations ---------- //

export const FormWrapper = ({ 
    id,
    width,
    children, 
    onSubmit,
    encType,
    method,
    title,
    titleSize, 
    alignTitle,
    removeRequired,
    submitButtonTitle
  }:FormProps) => {

  const methods = useForm()
  const { watch } = methods

  return(

    <FormWrap {...{ id }}>
      <FormProvider { ...methods } watch={ watch }>
        <form noValidate {...{ onSubmit, encType, method }}>

          <FormContent {...{ width }}>
            <FormHeader {...{ title, titleSize, alignTitle, removeRequired }} />
            { children }
            <Button variant="primary" type="submit" title={ submitButtonTitle ? submitButtonTitle : 'Submit' } />
          </FormContent>

        </form>
      </FormProvider>
    </FormWrap>

  )
}