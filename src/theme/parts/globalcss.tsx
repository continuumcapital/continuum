
export const globalStyle = {
  // '@font-face': [
  //   {
  //     fontFamily: 'Satoshi-Bold',
  //     src: 'local("Satoshi-Bold"), url("../../../public/fonts/Satoshi-Bold.woff2")',
  //     fontWeight: 700,
  //     fontDisplay: 'swap',
  //     fontStyle: 'normal'
  //   },
  //   {
  //     fontFamily: 'Satoshi-Regular',
  //     src: 'local("Satoshi-Regular"), url("../../../public/fonts/Satoshi-Regular.woff2")',
  //     fontWeight: 400,
  //     fontDisplay: 'swap',
  //     fontStyle: 'normal'     
  //   },   
  //   {
  //     fontFamily: 'Satoshi-Italic',
  //     src: 'local("Satoshi-Italic"), url("../../../public/fonts/Satoshi-Italic.woff2"), format("woff2")',
  //     fontWeight: 400,
  //     fontDisplay: 'swap',
  //     fontStyle: 'italic'   
  //   }, 
  //   {
  //     fontFamily: 'Satoshi-Black',
  //     src: 'local("Satoshi-Black"), url("../../../public/fonts/Satoshi-Black.woff2"), format("woff2")',
  //     fontWeight: 400,
  //     fontDisplay: 'swap',
  //     fontStyle: 'italic'   
  //   },    
  // ],

  '*': {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    color: 'inherit',
    fontSmoothing: 'antialiased',
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