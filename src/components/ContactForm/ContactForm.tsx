import React, { useState} from 'react'
import { styled } from '@theme'
import { Heading, Icon, Form, BasicInput, Textarea } from '@components'
import { SubmitStatus } from './Parts/SubmitStatus'
import emailjs from '@emailjs/browser'

const TopInputs = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 },

  '@tablet': {
    flexDirection: 'column',
    '> *:not(:last-child)': { 
      marginBottom: 12 ,
      marginRight: 0
    },
  }
})

const BottomInputs = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'stretch',
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginRight: 12 },

  '@tablet': {
    flexDirection: 'column',
    '> *:not(:last-child)': { 
      marginRight: 0,
      marginBottom: 12
    }
  }
})

const SubmitButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 200,
  width: '100%',
  minHeight: 50,
  maxHeight: 274,
  background: '#7C7C7C',
  borderRadius: '$r0',
  '@tablet': { maxWidth: '100%' }
})

const SubmitIcon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 50,
  height: 50,
  border: '1px solid $white',
  borderRadius: '50%',
  '@tablet': { display: 'none' }
})

// -------------- Typescript declarations -------------- //

type FormValues = {
  name: ""
  email: ""
  message: ""
}

// ---------- This is the end of declarations ---------- //

export const ContactForm = () => {
  const [ submitStatus, setSubmitStatus ] = useState<string | null>( null )

  // The onSubmit for the general contact form - uses Email JS
  // This will give a response of success once the email is sent

  const onSubmit = ( data: FormValues ) => {
    setSubmitStatus("Submitting...")
  
    emailjs.send('contact_form', 'template_continuum', data, `${process.env.NEXT_PUBLIC_EMAILJS_API}`)
      .then(() => {
        setSubmitStatus("Thanks for contacting us! We'll get back to you as soon as possible.")
      }, (error) => {
        console.error("EmailJS Error:", error)
        setSubmitStatus("Submission failed")
      })
  }
  
  return(

    <Form 
      hasCustomSubmit
      title={ <>Explore opportunities <br /> with Continuum Digital</> }
      alignTitle="center"
      submitButtonTitle="Let's go"
      onSubmit={ onSubmit }
    >
      <TopInputs>
        <BasicInput required label="Name" name="name" />
        <BasicInput required label="Email" name="email" />
        <BasicInput required label="Phone" name="phone" />
      </TopInputs>
      
      <BottomInputs>
        <Textarea required label="Message" name="message" />

        <SubmitButton type="submit">
          <SubmitIcon><Icon icon="arrow-top-right" /></SubmitIcon>
          <Heading size="l1" title="Send" />
        </SubmitButton>
      </BottomInputs>

      { submitStatus && <SubmitStatus status={ submitStatus } /> }
    </Form>

  )
}
