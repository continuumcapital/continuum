import type { NextPage } from 'next'
import { SiteContainer, Block, Form, Blob } from '@components'
import { styled } from '../../stitches.config'

const BlobAccent = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '25%',
  height: '100vh',
  opacity: 0.3
})

const Contact: NextPage = () => {
  return (
    
    <SiteContainer spacing="l1">
      <Block width="medium" blockItemSpacing="l1" alignment="center">
        <Form 
          title="Contact Us"
          descp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac placerat tincidunt, risus metus congue orci, quis accumsan neque nibh vel purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi aliquam diam vitae nisl suscipit, non aliquet nulla cursus."
        />
      </Block>

      <BlobAccent><Blob zoom={ 2.5 } position={ [ -0.8, -0.3, 0 ] } /></BlobAccent>
    </SiteContainer>

  )
}

export default Contact
