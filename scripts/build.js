const buildPackages = require('./gulpfile')
const buildAssets = require('./build.assets')
const {commonjs,es} = require('../config')
const {rmSync} = require('./utils')
const {resolve} = require('path')
rmSync(resolve(__dirname,"../",commonjs))
rmSync(resolve(__dirname,"../",es))
buildPackages("commonjs")
buildAssets("commonjs")
buildPackages("es")
buildAssets("es")
