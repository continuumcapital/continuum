import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({

  theme: {
    fonts: {
      sansSerif: 'Satoshi-Regular',
      sansSerifBold: 'Satoshi-Bold',
      sansSerifBlack: 'Satoshi-Black',
      serif: 'Source Serif 4',
      code: 'Source Code Pro'
    },
    fontSizes: {
      s0: '0.875rem', // 14px
      s1: '1.125rem', // 18px
      s2: '1.25rem', // 20px
      s3: '1.5rem', // 24px
      s4: '1.75rem', // 28px
      s5: '2rem', // 32px
      s6: '2.5rem', // 40px
      s7: '4.625rem' // 52px
    },
    colors: {
      lavender: '#e7e6ff',
      majorelleBlue: '#4f4ce3',
      moon: '#bfbfbf',
      gunMetal: '#222328',
      black: '#19181e',
      pureBlack: 'rgb( 0, 0, 0 )',
      gray100: 'rgb( 20, 21, 24)',
      gray200: 'rgb( 242, 242, 242 )',
      gray600: 'rgba( 160, 160, 160 )',
      gray700: 'rgb( 117, 117, 117 )',
      gray800: 'rgb( 41, 41, 41 )',
      purple700: 'rgb( 62, 58, 69 )',
      white: 'rgb( 255, 255, 255 )',
      green: 'rgb( 53, 168, 0 )',
      orange100: 'rgb( 252, 247, 239 )',
      border: 'rgba( 44, 44, 44 )',
      
      iris: '#6343C3',
    },
    radii: {
      r0: '8px',
      r1: '16px',
      r2: '24px',
      r3: '32px',
      pill: '9999px'
    },
    transitions: {
      s0: '0ms',
      s1: '150ms'
    }
  },
  media: {
    bp1: '(min-width: 480px)',
  },

});