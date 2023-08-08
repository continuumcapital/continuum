import type { NextPage } from 'next'
import { SiteContainer, Hero, ReadingBar, JobList } from '@components'

const Careers: NextPage = () => {
  return (
    
    <SiteContainer>
      <ReadingBar />
      <Hero 
        title="Continuum Careers"
        calloutTitle="Understand a Career with Continuum"
        calloutDescp="What powers Continuum's mission to offer next generation investment solutions is passion and relentless dedication to results. The firm views it's roadmap of innovation and responsibility to investors as a lifestyle, not a job. If current openings are not applicable to your skillset, it's encouraged that you reach out if you would like to connect with the Continuum team."
        calloutButtonTitle="Apply now"
        calloutHref="#jobs"
      />

      <JobList 
        jobs={[
          { 
            title: 'Accounts',
            job: [
              { href: '/', title: 'Account Analyst - New Business', location: 'Chicago IL' },
              { href: '/', title: 'Account Analyst - Stable Coins', location: 'Chicago IL' },
              { href: '/', title: 'Portfolio Analyst - High Risk Coins', location: 'Chicago IL' },
              { href: '/', title: 'Data Analyst - Fund Reporting', location: 'Chicago IL' }
            ]
          },
          { 
            title: 'Business',
            job: [
              { href: '/', title: 'New Business Sales Lead', location: 'Chicago IL' },
              { href: '/', title: 'New Business Sales Lead', location: 'Chicago IL' }
            ]
          }
        ]}
      />
    </SiteContainer>

  )
}

export default Careers
