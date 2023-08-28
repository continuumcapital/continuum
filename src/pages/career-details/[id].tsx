import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { SiteContainer, HeroTitle, JobDetails, JobApplyForm } from '@components'
import { getJobDetails } from '@lib'

// -------------- Typescript declarations -------------- //

interface JobDetail {
  id: string
  title: string
  content: string
  location: { name: string }
  metadata: { 
    name?: string 
    value: string 
  }[]
  questions: {
    description: string | null
    label: string
    required: boolean
    fields: {
      name: string
      type: 'input_text' | 'input_file' | 'textarea' | 'multi_value_multi_select'
      values: any[]
      required: boolean
    }[]
    value: string
  }[]
}

// ---------- This is the end of declarations ---------- //

const CareerDetails: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [ jobDetail, setJobDetail ] = useState<JobDetail | null>(null)
  const [ complianceData, setComplianceData ] = useState<any[]>([]);
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {
    getJobDetails( id, { setJobDetail, setComplianceData, setError });
  }, [ id ]);
  
  return (

    <SiteContainer removeBlob removeContact>
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

      { jobDetail?.questions && 
        <JobApplyForm 
          questions={ jobDetail.questions } 
          compliance={ complianceData } 
          jobId={ jobDetail.id }
        />
      }
    </SiteContainer>
  )
}

export default CareerDetails
