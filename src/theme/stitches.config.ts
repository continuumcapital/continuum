import { createStitches } from '@stitches/react'
import { globalStyle, breakpoints, colors, fonts, fontSizes, radius, transitions } from './parts'

/* --------------------------------------------

  Read me:

  This export block is for the foundational variables for the Design Systems. These include fonts, fontsize, colors, radius, 
  speed transitions, and brakpoint declarations. An example of this is take the colors. We have all the colors defined by 
  the actual color name, such as indigo100 - indigo800. We use this system as a foundation, where we would not use them with 
  in a component, but instead use them for light and dark theme declarations, such as primary color: '$indigo600' or 
  button color: '$blue500' for example. From these, we would use them in components. Such as the button component would be 
  something as button_primary{ background: '$buttonPrimary' }.

  End read me

---------------------------------------------*/

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
