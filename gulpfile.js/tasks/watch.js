const { watch } = require('gulp')
const path = require('path')
const { css } = require('./css')
const { js } = require('./js')

const jsDir = path.join(__dirname, '../../src/js/**/*.js')
const cssDir = path.join(__dirname, '../../src/style/**/*.css')

function _watch(cb) {
	// watch(jsDir, js)
	watch(cssDir, css)
	cb()
}

module.exports = _watch