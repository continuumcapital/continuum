import type { NextPage } from 'next'
import { Preloader, SiteContainer, Hero, JobList } from '@components'
import { getJobs } from '@lib'

const Careers: NextPage = () => {
  const { groupedJobs, isLoading } = getJobs()
  if ( isLoading ) return <Preloader />

  return (
    
    <SiteContainer hasContactForm>
      <Hero 
        title="Continuum Careers"
        calloutTitle="Understand a Career with Continuum"
        calloutDescp="What powers Continuum's mission to offer next generation investment solutions is passion and relentless dedication to results. The firm views it's roadmap of innovation and responsibility to investors as a lifestyle, not a job. If current openings are not applicable to your skillset, it's still encouraged that you reach out if you would like to connect with the Continuum team."
        calloutButtonTitle="Apply now"
        calloutHref="#job-list"
      />

      <JobList 
        title="Current Openings" 
        groupedJobs={ groupedJobs } 
      />
    </SiteContainer>

  )
}

export default Careers
