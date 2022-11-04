import React from 'react'
import { styled } from '@theme'
import PuffLoader from "react-spinners/PuffLoader"

const LoadingWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: '$siteBg',
  zIndex: 9999
})

// ---------- This is the end of declarations ---------- //

export const Preloader = () => {
  return(
    
    <LoadingWrap><PuffLoader color="#a9f7f1" /></LoadingWrap>

  )
}
