import React from 'react';
import { useFormContext } from 'react-hook-form';
import { styled } from '@theme';
import { Heading, TextEm } from '@components';
import { InputStatus } from './InputStatus';

// For the master container of the textarea
// This holds the long for messages that lives within the form component

const TextContain = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// For the styling of the html component of the textarea

const TextArea = styled('textarea', {
  position: 'relative',
  width: '100%',
  padding: '22px 16px',
  background: '$bgLight',
  borderRadius: '$r0',
  resize: 'none',
  fontFamily: '$sansSerif',
  fontSize: '1rem',
  minHeight: 274,
  transition: '$s1',
  outline: 'none',
  border: 'none',
  '&:focus': { borderColor: '$white' },
  '&::placeholder': { color: '$placeholder' }
})

// -------------- Typescript declarations -------------- //

interface TextareaProps {
  required?: boolean
  label: string
  name: string
  rules?: any
  placeholder?: string
}

// ---------- This is the end of declarations ---------- //

export const Textarea = ({
  label,
  required,
  name,
  rules,
  placeholder = 'Message...'
}: TextareaProps) => {

  const { register, formState: { errors }, watch, trigger } = useFormContext()
  const currentValue = watch( name )
  const hasError = errors[ name ]
  const errorMessage = errors[ name ]?.message as string | undefined

  const fieldRules = {
    ...rules,
    required: required ? 'This field is required.' : false
  };

  return (
    <TextContain>
      <label hidden htmlFor={ name }>
        <Heading title={ label } />
        { required && <TextEm color="danger">*</TextEm> }
      </label>

      <TextArea
        id={ name }
        {...register( name, fieldRules )}
        onBlur={() => trigger( name )}
        {...{ name, required, placeholder }}
      />

      { hasError && <InputStatus status={ errorMessage || 'Error' } /> }
    </TextContain>
  );
}
