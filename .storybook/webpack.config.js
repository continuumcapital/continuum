const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules']

  config.resolve.alias = {
    '@components': path.resolve(__dirname, '..', 'src', 'components'),
    '@pages': path.resolve(__dirname, '..', 'src', 'pages', '*'),
    '@public': path.resolve(__dirname, '..', 'public', '*'),
    '@theme': path.resolve(__dirname, '..', 'src', 'theme', 'stitches.config.ts'),
    '@lib': path.resolve(__dirname, '..', 'src', 'lib'),
  }

  // We're using several that don't play nicely with Webpack5.
  // https://github.com/crypto-browserify/cipher-base/issues/10
  config.resolve.fallback = { http: false, os: false, https: false, crypto: false, stream: false }
  return config
}