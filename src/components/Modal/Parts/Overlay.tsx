import React from 'react'
import { styled, keyframes } from '@theme'
import * as DialogPrimitive from '@radix-ui/react-dialog'

// For the keyframe animation of the modal

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

// For the container of the overlay
// This is hidden by default and shows up once the user click the show modal button

const OverlayWrap = styled( DialogPrimitive.Overlay, {
  background: `rgba( 0, 0, 0, 0.8 )`,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 9990,

  // For the animation of the overlay to show when the user clicks the modal button
  // This will show the overlay in the background, which is obvisously hidden by default

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

// ---------- This is the end of declarations ---------- //

export const Overlay = () => {
  return(

    <OverlayWrap />
      
  )
}