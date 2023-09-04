import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import { Preloader, SiteContainer, HeroTitle, JobDetails, JobApplyForm } from '@components'
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
    name: string
    label: string
    required: boolean
    fields: {
      name: string
      type: 'input_text' | 'input_file' | 'multi_value_single_select'
      values: any[]
      required: boolean
    }[]
  }[]
}

// ---------- This is the end of declarations ---------- //

const CareerDetails: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [ jobDetail, setJobDetail ] = useState<JobDetail | null>( null )
  const [ complianceData, setComplianceData ] = useState<any[]>([])
  const [ error, setError ] = useState<string | null>( null )
  const [ isLoading, setIsLoading ] = useState( true )

  useEffect(() => {
    if ( id ) {
      getJobDetails( id, { setJobDetail, setComplianceData, setError } )
        .then(() => { setIsLoading( false ) })
        .catch(() => { setIsLoading( false ) })
    }
  }, [ id ])

  if ( isLoading ) return <Preloader />
  if ( error ) return <div>Error: { error }</div>
  if ( !jobDetail ) return null

  return (
    <SiteContainer removeBlob removeContact>
      <HeroTitle 
        title={ jobDetail.title }
        location={ jobDetail.location.name }
        buttonTitle="Apply now"
        buttonLink="#apply-now"
        backLink="/careers"
      />

      <JobDetails 
        descp={ jobDetail.content } 
        responsibilities={ jobDetail.metadata[1].value }
        requirements={ jobDetail.metadata[2].value }
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


