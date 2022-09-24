import React, { useState } from 'react'
import { styled } from '../../../../stitches.config'
import { InputBase } from './_base'

// -------------- Typescript declarations -------------- //

interface InputProps {
  id: string
  type: string
  label: string
  inputSize?: 'small'
}

// ---------- This is the end of declarations ---------- //

export const Input = ({
    id,
    type,
    inputSize,
    label
  }: InputProps ) => {

  const [ active, setActive ] = useState()
  
  return(

    <InputBase {...{ id, type, inputSize, label }} />
    
  )
}
