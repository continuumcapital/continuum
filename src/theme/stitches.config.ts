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

export const globalStyles = globalCss({ ...globalStyle })

export const lightTheme = createTheme({
  colors: {
    siteBg: '$white',
    contentColor: '$black'
  },
})

export const darkTheme = createTheme({
  colors: {
    siteBg: '$black',
    contentColor: '$white'
  },
})
