import { createStitches } from '@stitches/react'
import { globalStyle, breakpoints, colors, fonts, fontSizes, radius, transitions } from './parts'

export const { styled, globalCss, keyframes, theme, createTheme, config } = createStitches({
  theme: {
    fonts: { ...fonts },
    fontSizes: { ...fontSizes },
    colors: { ...colors },
    radii: { ...radius },
    transitions: { ...transitions },
  },
  media: { ...breakpoints },
})

export const globalStyles = globalCss({ '*': {
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      color: 'inherit',
      fontSmoothing: 'antialiased',
    },
    
    body: {
      padding: 0,
      margin: 0,
      fontFamily: 'Source Serif 4',
      lineHeight: 1,
      fontSize: '1rem',
      background: 'white',
      color: '#161417'
    },

    a: { textDecoration: 'none' },

    button: { cursor: 'pointer' },

    p: { margin: 0 },
  
    'fieldset, ul, figure, button': {
      border: 'none',
      padding: 0,
      margin: 0,
      appearance: 'none',
      background: 'none'
    } })
