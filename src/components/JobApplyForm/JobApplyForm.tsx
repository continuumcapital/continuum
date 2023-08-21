import React from 'react'
import { styled } from '@theme'

interface Question {
  description: string | null
  label: string
  required: boolean
  fields: any
}

export const QuestionForm: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const FormWrap = styled('div', {

  })
  
  const FormContent = styled('div', {
  
  })
  
  const Input = styled('div', {
  
  })

  return (

    <FormWrap>
      <FormContent>
        { questions.map(( question, i ) => (

          <Input key={ i } className="question">
            <label>{ question.label }</label>

            { question.fields.map((field:any, fieldIndex:any) => {
              switch (field.type) {
                case "input_text":
                  return (
                    <input key={fieldIndex} type="text" name={field.name} required={question.required} />
                  );
                case "input_file":
                  return (
                    <input key={fieldIndex} type="file" name={field.name} required={question.required} />
                  );
                case "textarea":
                  return (
                    <textarea key={fieldIndex} name={field.name} required={question.required}></textarea>
                  );
                default:
                  return null;
              }
            })}
          </Input>
        ))}

        <button type="submit">Submit</button>
      </FormContent>
    </FormWrap>

  );
};