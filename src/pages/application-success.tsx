import type { NextPage } from 'next'
import { SiteContainer, Hero } from '@components'
import { getJobs } from '@lib'

const Careers: NextPage = () => {
  const { groupedJobs } = getJobs()

  return (
    
    <SiteContainer removeContact removeFooter>
      <Hero 
        title="Thank you for applying to Continuum Capital"
        descp="Your application has been received and we will review it right away. If your application seems like a good fit for the position we will contact you soon."
      />
    </SiteContainer>

  )
}

export default Careers
