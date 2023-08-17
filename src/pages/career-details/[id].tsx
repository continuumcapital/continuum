import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { SiteContainer, Block, HeroTitle, ReadingBar, JobDetails, Form } from '@components';

interface JobDetail {
  id: string
  title: string
  content: string
  location: {
    name: string
  }
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
  
  
  return (
    <SiteContainer removeBlob removeContact>
      <ReadingBar />
      <HeroTitle 
        title={ jobDetail?.title }
        location={ jobDetail?.location.name }
        backLink="/careers"
      />

      <JobDetails jobDescp={ jobDetail?.content } />
    </SiteContainer>
  );
}

export default Home;
