import type { NextPage } from 'next'
import { SiteContainer, Hero } from '@components'

const Careers: NextPage = () => {
  return (
    
    <SiteContainer removeContact removeFooter>
      <Hero 
        leftAlignOnMobile
        title="Thank you for applying to Continuum Capital"
        descp="Thank you for applying to Continuum Capital. Our team will follow up soon."
      />
    </SiteContainer>

  )
}

export default Careers
