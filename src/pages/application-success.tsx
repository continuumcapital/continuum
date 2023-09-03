import type { NextPage } from 'next'
import { SiteContainer, Hero } from '@components'
import { getJobs } from '@lib'

const Careers: NextPage = () => {
  const { groupedJobs } = getJobs()

  return (
    
    <SiteContainer removeContact removeFooter>
      <Hero 
        title="Thank you for applying to Continuum Capital"
        descp="We'll be in touch shortly"
      />
    </SiteContainer>

  )
}

export default Careers
