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
    contentColor: '$black',
    blue: '$majorelleBlue',
    primaryButton: '$turquiose',
    buttonDefault: '$gray200',

    // Border colors

    blueBorder: '#fff'
  },
})

export const darkTheme = createTheme({
  colors: {
    siteBg: '$black',
    contentColor: '$white',
    blue: '$pictonBlue',
    secondaryBlue: '$majorelleBlue',

    // Button colors

    buttonDefault: '#000',
    primaryButton: 'turquiose',
    secondaryButtonHover: '$electric',

    // Border colors

    blueBorder: '$royalBlue'
  },
})
