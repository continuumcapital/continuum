import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { SiteContainer, HeroTitle, ReadingBar, JobDetails, JobApplyForm } from '@components';

interface JobDetail {
  id: string;
  title: string;
  content: string;
  location: {
    name: string;
  };
  metadata: {
    name?: string;
    value: string;
  }[];
  questions: Question[];
}

export interface Field {
  name: string;
  type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select';
  values: any[];
}

export interface Question {
  description: string | null;
  label: string;
  required: boolean;
  fields: Field[];
  value: string;
}



const Home: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [ jobDetail, setJobDetail ] = useState<JobDetail | null>(null)
  const [ complianceData, setComplianceData ] = useState<any[]>([]);
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const res = await fetch(`/api/jobPost?id=${id}`)
          const result = await res.json()
  
          if (res.ok) {
            setJobDetail(result);
            setComplianceData(result.compliance || []);
          } else {
            setError(result.message || 'An error occurred')
          }
        } catch (error) {
          setError('An error occurred while fetching data')
        }
      }
    }
  
    fetchData()
  }, [ id ])  
  
  console.log( jobDetail )
  
  return (

    <SiteContainer removeBlob removeContact>
      <ReadingBar />
      <HeroTitle 
        title={ jobDetail?.title }
        location={ jobDetail?.location.name }
        buttonTitle="Apply now"
        buttonLink="#apply-now"
        backLink="/careers"
      />

      <JobDetails 
        descp={ jobDetail?.content } 
        responsibilities={ jobDetail?.metadata[1].value }
        requirements={ jobDetail?.metadata[2].value }
      />

      {jobDetail?.questions && <JobApplyForm questions={ jobDetail.questions } compliance={ complianceData } />}
    </SiteContainer>
  );
}

export default Home;
