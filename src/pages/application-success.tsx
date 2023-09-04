import type { NextPage } from 'next'
import { SiteContainer, Hero, Modal, ContactForm } from '@components'

const Careers: NextPage = () => {
  return (
    
    <SiteContainer removeContact removeFooter>
      <Hero 
        title="Thank you for applying to Continuum Capital"
        descp="Thank you for applying to Continuum Capital. Our team will follow up soon."
      />

      <Modal trigger={ <div>Click me</div> }><ContactForm /></Modal>
    </SiteContainer>

  )
}

export default Careers
