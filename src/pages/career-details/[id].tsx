import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { SiteContainer, Block, HeroTitle, ReadingBar, JobDetails, Form } from '@components';

interface Field {
  name: string;
  type: 'input_text' | 'input_file' | 'textarea';
  values: any[];  // Update this if you know the exact values type
}

interface Question {
  description: string | null;
  label: string;
  required: boolean;
  fields: Field[];
}


interface JobDetail {
  id: string
  title: string
  content: string
  location: {
    name: string
  }
  metadata: {
    name?: string
    value: string
  }[]
  questions: Question[];
}



const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [jobDetail, setJobDetail] = useState<JobDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/jobPost?id=${id}`);
          const result = await res.json();
  
          if (res.ok) {
            setJobDetail(result);
          } else {
            setError(result.message || 'An error occurred');
          }
        } catch (error) {
          setError('An error occurred while fetching data');
        }
      }
    };
  
    fetchData();
  }, [id]);  

  console.log( jobDetail )
  
  const QuestionForm: React.FC<{ questions: Question[] }> = ({ questions }) => {
    return (
      <form>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label>{question.label}</label>
            {question.fields.map((field, fieldIndex) => {
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
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  
  return (
    <SiteContainer removeBlob removeContact>
      <ReadingBar />
      <HeroTitle 
        title={ jobDetail?.title }
        location={ jobDetail?.location.name }
        backLink="/careers"
      />

      <JobDetails 
        descp={ jobDetail?.content } 
        responsibilities={ jobDetail?.metadata[1].value }
        requirements={ jobDetail?.metadata[2].value }
      />

      {jobDetail?.questions && <QuestionForm questions={jobDetail.questions} />}
    </SiteContainer>
  );
}

export default Home;
