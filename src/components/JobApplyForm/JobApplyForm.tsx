import React, { useState } from 'react'
import { styled } from '@theme'
import { FormWrapper, Fields, ComplianceQuestions, BasicInput, FileInput } from './Parts'

// For the container of all of the inputs within the form
// This is mainly used to automate the spacing between each of the inputs within the container

const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 12 }
})

// -------------- Typescript declarations -------------- //

interface CustomField {
  name: string
  type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select' | 'multi_value_single_select'
  values: any[]
  required: boolean
}

interface Question {
  description: string | null
  label: string
  required: boolean
  fields: CustomField[]
  value: string
}

interface FormProps {
  questions: Question[]
  compliance: any[]
  jobId: string | number
}

// ---------- This is the end of declarations ---------- //

// export const JobApplyForm = ({ 
//     questions, // For the basic questions within the Greenhouse API
//     compliance, // For the compliance questions within the Greenhouse API
//     jobId // For the ID of the job posting that the applicant will send to
//   }:FormProps) => {
  
//   const [ values, setValues ] = useState<{ [key: string]: any }>({});
//   const handleSubmit = async () => { await submitApplication({ endpoint: "/api/applicationSubmit", jobId, values })}

//   // Here we are accounting for value changes as the types within the input
//   // This catched the new values as they get sent to the Greenhouse applications

//   const handleInputChange = (questionIndex: number, fieldIndex: number, value: any) => {
//     setValues((prevValues) => ({
//       ...prevValues,
//       [`${questionIndex}-${fieldIndex}`]: value,
//     }));
//   };

//   // Here we are filtering through the compliance question to only extract the 'Race' and 'Gender' questions
//   // By default there are two additional questions - Veteran and Disability status - do not need those for this form

//   const filteredCompliance = compliance.filter((complianceItem: { questions: Question[] }) => {
//     return complianceItem.questions.some((question: Question) =>
//       question.label.includes('Race') || question.label.includes('Gender')
//     );
//   });

//   return (

//     <FormWrapper onSubmit={ handleSubmit }>
//       <InputContainer>
//         { questions.map(( question, i ) => (
//           <div key={`question-${ i }`}>
//             { question.fields.map(( field, fieldIndex ) => (

//               <Fields 
//                 key={ fieldIndex } 
//                 field={ field } 
//                 fieldIndex={ fieldIndex }
//                 value={ values[`${ i }-${ fieldIndex }`] || '' } 
//                 questionLabel={ question.label } 
//                 handleInputChange={( index:any, val:any ) => handleInputChange( i, index, val )}
//                 required={ question.required }
//               />
          
//             ))}
//           </div>
//         ))}
//       </InputContainer>

//       <Text>
//         <Heading bold="heavy" size="l2" title="US Equal Opportunity Employer Statement" />

//         <p>
//           Continuum Capital is an equal opportunity employer that is commited to diversity and inclusion in the workplace. We 
//           prohibit discrimination and harassment of any kind based on race, color, sex, religion, sexual orientation, national origin, 
//           disability, genetic information, pregnancy, or any other protected characteristic as outlined by federal, state, or local laws.
//         </p>

//         <p>
//           This policy applies to all employment practices within our organization, including hiring, recruiting, promotion, termination,
//           layoff, recall, leave of absence, compensation, benefits, training, and apprenticeship. Continuum Capital makes hiring 
//           decisions based solely on qualifications, merit, and business needs at the time.
//         </p>
//       </Text>
      
//       { filteredCompliance.map(( complianceItem, index ) => (
//         <div key={`compliance-${ index }`}>

//           <InputContainer>
//             { complianceItem.questions && complianceItem.questions.map(( nestedQuestion: any, nestedQuestionIndex: any ) => (
//               <ComplianceQuestions 
//                 key={ nestedQuestionIndex } 
//                 question={ nestedQuestion } 
//                 questionIndex={ nestedQuestionIndex }
//                 values={ values }
//                 handleInputChange={ handleInputChange }
//               />
//             ))}
//           </InputContainer>

//         </div>
//       ))}
//     </FormWrapper>

//   ) 
// }


export const JobApplyForm = ({ 
  questions,
  compliance,
  jobId
}: FormProps) => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [resume, setResume] = useState("")

  const handleSubmit = async (formData: any) => {
    const applicationData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      resume: formData.resume,
      question_4387434007: formData.question_4387434007
    };

    try {
        const response = await fetch(`/api/applicationSubmit?id=${jobId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ applicationData })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Response from API:", data);
            // Handle successful response
            // Maybe set some state, show a success message, navigate to a different page, etc.
        } else {
            // Handle non-successful response
            console.error("API response error:", await response.json());
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
  };

  return (

    <FormWrapper onSubmit={ handleSubmit }>
      <InputContainer>


        <BasicInput
          label="First Name"
          name="first_name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
        />

        <BasicInput 
          label="Last Name"
          name="last_name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
        />

        <BasicInput 
          label="Email"
          name="email"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        <FileInput 
          label="Resume"
          name="resume"
          onChange={( acceptedFiles:any ) => setResume(acceptedFiles[0])}
        />

        <BasicInput 
          label="LinkedIn"
          name="question_4387434007"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </InputContainer>
    </FormWrapper>

  );
}

