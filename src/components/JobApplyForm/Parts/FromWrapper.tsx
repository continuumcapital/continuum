import React from 'react'
import { styled } from '@theme'
import { Button } from '@components'
import { FormHeader } from './FormHeader'
import { XyzTransition } from '@animxyz/react'

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
  '> *:not(:last-child)': { marginBottom: 50 },
  '@mobile': { padding: '75px 0 20px' }
})

interface FormProps {
  children: React.ReactNode
  onSubmit?: any
}

export const FormWrapper = ({ children, onSubmit }:FormProps) => {
  return(

    <FormWrap id="apply-now">
      <XyzTransition xyz="fade down delay-15 duration-15" appear>
        <form method="POST" encType='multipart/form-data' {...{ onSubmit }}>

          <FormContent>
            <FormHeader title="Apply for this job" />
            { children }
            <Button variant="primary" type="submit" title="Submit Application" />
          </FormContent>

        </form>
      </XyzTransition>
    </FormWrap>
  )
}