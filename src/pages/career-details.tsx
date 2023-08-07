import type { NextPage } from 'next'
import { SiteContainer, Block, HeroTitle, ReadingBar, JobDetails, Form } from '@components'

const Home: NextPage = () => {
  return (
    
    <SiteContainer>
      <ReadingBar />
      <HeroTitle />

      <JobDetails></JobDetails>
    </SiteContainer>

  )
}

export default Home
