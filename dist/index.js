
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./avatar-generator.cjs.production.min.js')
} else {
  module.exports = require('./avatar-generator.cjs.development.js')
}
