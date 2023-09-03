
// type SubmitOptions = {
//   endpoint: string,
//   jobId: string | number,
//   values: Record<string, any>
// };

// export const submitApplication = async ({ endpoint, jobId, values }: SubmitOptions) => {
//   try {
//       const response = await fetch(`${endpoint}?id=${jobId}`, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(values)
//       });

//       console.log('Raw Response:', response);

//       const data = await response.json();

//       console.log('Parsed JSON Response:', data);

//       if (response.ok) {
//           // Handle success, maybe navigate user to a thank-you page or show a success message.
//       } else {
//           console.log('Server responded with an error', data);
//       }
//   } catch (error) {
//       console.error('Network error:', error);
//       // Handle network errors or show an error message to the user.
//   }
// };


// lib/formUtils.ts

interface ComplianceQuestion extends Question {}

interface ComplianceItem {
  questions: ComplianceQuestion[];
}

interface Field {
  name: string
  type: 'input_text' | 'input_file' | 'multi_value_single_select'
  values: any[]
  required: boolean
}

interface Question {
  name: string
  label: string
  required: boolean
  fields: Field[]
}

export const submitApplication = async (
    formData: any, 
    questions: Question[], 
    compliance: ComplianceItem[], 
    jobId: string | number
  ) => {
    
  const data = new FormData();

  // Append standard questions to the FormData

  questions.forEach((question: Question) => {
    question.fields.forEach((field: Field) => {
      data.append(field.name, formData[field.name])
    })
  })

  // Append compliance questions to the FormData

  compliance.forEach((complianceItem: ComplianceItem) => {
    complianceItem.questions.forEach((question: Question) => {
      if (question.label === 'Race' || question.label === 'Gender') {
        question.fields.forEach((field: Field) => {
          data.append(field.name, formData[field.name])
        })
      }
    })
  })

  try {
    const response = await fetch(`/api/applicationSubmit?id=${jobId}`, {
      method: 'POST',
      body: data 
    });

    if (response.ok) {
      const data = await response.json()
      console.log("Response from API:", data)
    } else {
      console.error("API response error:", await response.json())
    }
  } catch (error) {
    console.error("An error occurred:", error)
  }
}
  