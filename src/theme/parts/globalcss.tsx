import { Typeface } from './fonts'

export const globalStyle = {
  '@import': [ "url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&family=Source+Serif+4:ital,opsz@0,8..60;1,8..60&display=swap')" ],
  '@font-face': Typeface,

  '*': {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    color: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  },

  img: {
    width: '100%'
  },

  body: {
    padding: 0,
    margin: 0,
    fontFamily: '$sansSerif',
    lineHeight: 1,
    fontSize: '1rem',
    background: '$siteBg',
    color: '$contentColor'
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
  }
}