const { series, parallel } = require('gulp');
const { js } = require('./tasks/js.js')
const { css } = require('./tasks/css.js')

function _clean(callback) {
	console.log('clean task')
	callback()
}

exports.build = series(_clean, parallel(css, js))