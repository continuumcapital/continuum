import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputWrap, FilePreview, Input } from './Parts'

// -------------- Typescript declarations -------------- //

interface FileProps {
  key?: any
  name: string
  label: string
  required?: boolean
  rules?: any
  onChange?: any
}

// ---------- This is the end of declarations ---------- //

export const FileInput = ({ label, name, required, rules, onChange }:FileProps) => {
  const { register, setValue, formState: { errors }, trigger } = useFormContext()
  const [ uploadedFile, setUploadedFile ] = useState<File | null>(null)
  const hasError = errors[ name ]
  const errorMessage = hasError?.message

  const fieldRules = {
    ...rules,
    required: required ? 'This field is required.' : false
  }
  

  const onFileUpload = ( acceptedFiles: any ) => {
    setValue( name, acceptedFiles[ 0 ] )
    setUploadedFile( acceptedFiles[ 0 ] )

    if ( onChange ) {
      onChange( acceptedFiles );
    }
  }

  const removeUploadedFile = () => {
    setUploadedFile( null )
    setValue( name, null )
  }

  return (

    <InputWrap {...{ name, label, required }}>
      <Input 
        onDrop={ onFileUpload }
        uploadedFile={ uploadedFile }
        name={ name }
        required={ required }
        fieldRules={ register( name, fieldRules ) }
        trigger={ trigger }
        hasError={ hasError }
        errorMessage={ errorMessage }
      />

      { uploadedFile && (

        <FilePreview 
          title={ uploadedFile.name }
          onClick={ removeUploadedFile }
        />

      )}
    </InputWrap>

  )
}
