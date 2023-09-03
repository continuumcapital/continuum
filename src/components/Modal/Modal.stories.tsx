import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from '@components'

const story = {
  title: 'atoms/Modal',
  component: Modal as any,
  parameters: { layout: 'centered' },
  argTypes: {}
}
export default story

export const Full = () => ( 

  <Modal 
    triggerTitle="Modal"
    title="Edit Profile"
    descp="Allow payment of $999.99 to Enyinnaya Chinedu to be processed in payment batch #T0728, and unflag employee?"
    actionButtonTitle="Modal"
  >
    This is some content
  </Modal>

)
