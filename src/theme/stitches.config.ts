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
    siteBg: '$twilight',
    grayBg: '$moon',
    contentColor: '$black',
    blue: '$majorelleBlue',
    primaryButton: '$turquiose',
    buttonDefault: '$gray200',
    border: '#5e5e5e',
    
    // Border colors

    blueBorder: '#fff'
  },
})

export const darkTheme = createTheme({
  colors: {
    siteBg: '$black',
    contentColor: '$white',
    blue: '$pictonBlue',
    grayBg: '$moon',
    secondaryBlue: '$majorelleBlue',

    // Button colors

    buttonDefault: '#000',
    primaryButton: '$turquoise',
    secondaryButtonHover: '$electric',

    // Border colors

    border: '#5e5e5e',
    blueBorder: '$royalBlue'
  },
})
