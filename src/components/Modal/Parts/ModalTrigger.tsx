import React from 'react'
import { styled } from '@theme'
import { Button } from '@components'
import * as DialogPrimitive from '@radix-ui/react-dialog'

const TriggerWrap = styled(DialogPrimitive.Trigger, {
  display: 'inline-flex',
  flexDirection: 'row',
})

interface TriggerProps {
  variant?: 'primary' | 'outline' | 'icon' 
  title?: string | number
  titleUnBold?: boolean
  icon?: string
}

export const ModalTrigger = ({
    variant,
    title, 
    titleUnBold,
    icon
  }:TriggerProps) => {
  
  return(

    <TriggerWrap asChild>
      { titleUnBold ? (
        <Button notBold {...{ variant, icon, title }} />
      ) : (
        <Button {...{ variant, title, icon }} />
      )}
    </TriggerWrap>

  )
}