import React, { useState} from 'react'
import { Form } from '@components'
import { SubmitStatus } from './Parts/SubmitStatus'
import emailjs from '@emailjs/browser'
import { BasicInput } from '../Form/Inputs/BasicInput'
import { Textarea } from '../Form/Inputs/Textarea'

type FormValues = {
  name: ""
  email: ""
  message: ""
}

export const ContactForm = () => {
  const [ submitStatus, setSubmitStatus ] = useState<string | null>( null )

  const onSubmit = (e:any, data: FormValues) => {
    e.preventDefault();

    setSubmitStatus( "Submitting..." )

    emailjs.send( 'contact_form', 'template_continuum', data, `${ process.env.NEXT_PUBLIC_EMAILJS_API }` )
    .then(() => {
      setSubmitStatus("Thanks for contacting us! We'll get back to you as soon as possible.");
   }, (error) => {
      console.error("EmailJS Error:", error);
      setSubmitStatus("Submission failed");
   })
   
  }

  return(
    <Form 
      width="l0"
      title="Contact us"
      onSubmit={onSubmit}
    >
      <BasicInput required label="Full name" name="name" />
      <BasicInput required label="Email" name="email" />
      <Textarea required label="Message" name="message" />
      {submitStatus && <SubmitStatus status={ submitStatus } />}
    </Form>
  )
}
