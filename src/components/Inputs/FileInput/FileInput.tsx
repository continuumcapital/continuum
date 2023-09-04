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

export const FileInput = ({ 
    label, // Required - For the label of the input
    name,  // Required - For the name of the input
    required, // Optional - Supporting if required is required
    rules, // Required if optional - Supporting error state for the file upload input
    onChange  // Required - Needed for the Greenhouse API
  }:FileProps) => {

  const { register, setValue, formState: { errors }, trigger } = useFormContext()
  const [ uploadedFile, setUploadedFile ] = useState<File | null>(null)
  const hasError = errors[ name ]
  const errorMessage = hasError?.message
  const fieldRules = { ...rules, required: required ? 'This field is required.' : false }

  // Here we set the functionality for when a user uploads a file
  // This will remove the file input and replace it with a chip containing the title of the uploaded file

  const onFileUpload = ( acceptedFiles: any ) => {
    setValue( name, acceptedFiles[ 0 ] )
    setUploadedFile( acceptedFiles[ 0 ] )

    if ( onChange ) {
      onChange( acceptedFiles );
    }
  }

  // Function to be able to remove the file and reupload one
  // Needed if the user makes a mistake in their upload

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
        fieldRules={ register( name, fieldRules )}
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
