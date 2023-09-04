import React, { useState} from 'react'
import { Form, BasicInput, Textarea } from '@components'
import { SubmitStatus } from './Parts/SubmitStatus'
import emailjs from '@emailjs/browser'

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
      removeRequired
      width="l0"
      title="Contact us"
      onSubmit={ onSubmit }
    >
      <BasicInput required label="Full name" name="name" />
      <BasicInput required label="Email" name="email" />
      <Textarea required label="Message" name="message" />
      { submitStatus && <SubmitStatus status={ submitStatus } /> }
    </Form>

  )
}
