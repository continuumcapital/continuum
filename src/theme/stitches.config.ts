import { createStitches } from '@stitches/react'
import { breakpoints, colors, fonts, fontSizes, radius, transitions } from './parts'

export const { styled, globalCss, keyframes, theme, createTheme, config } = createStitches({

  theme: {
    fonts: { ...fonts },
    fontSizes: { ...fontSizes },
    colors: { ...colors },
    radii: { ...radius },
    transitions: { ...transitions }
  },
  media: { ...breakpoints },

})