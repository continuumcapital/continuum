import React, { useRef } from 'react'
import { useForm, useController, UseControllerProps } from "react-hook-form"
import { FormWrap } from './Parts'
import { Input, Textarea } from '@components'
import emailjs from '@emailjs/browser'

// -------------- Typescript declarations -------------- //

type FormValues = {
  name: ""
  email: ""
  message: ""
}

interface FormProps {
  title?: string
  descp?: string
}

// ---------- This is the end of declarations ---------- //

export const Form = ({
    title,
    descp
  }: FormProps ) => {

  const form = useRef<HTMLFormElement>(null);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
    mode: "onChange"
  })
  
  const onSubmit = ( data:FormValues ) => {
    //@ts-ignore
    emailjs.sendForm('contact_form', 'template_continuum', form.current, 'JIo1rNfaUflvW0z-3')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  
  return(

    <FormWrap   
      formRef={ form }
      {...{ title, descp }}
      onSubmit={ handleSubmit(onSubmit) }
    >
      <Input 
        label="Full name" 
        //@ts-ignore
        control={ control } 
        name="name" 
        rules={{ required: true }} 
      />
      <Input 
        label="Email" 
        type="email" 
        //@ts-ignore
        control={ control } 
        name="email" 
        rules={{ required: true }} 
      />
      <Textarea 
        name="message" 
        //@ts-ignore
        control={ control } 
        rules={{ required: true }} 
      />
    </FormWrap> 

  )
}
