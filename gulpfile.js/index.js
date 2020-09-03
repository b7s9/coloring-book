const { series, parallel } = require('gulp');
const del = require('del')
const { js } = require('./tasks/js')
const { css, minifyCss } = require('./tasks/css')
const watch = require('./tasks/watch')

async function _clean(callback) {
	await del(path.join(__dirname, '../build/'))
	console.log('clean task')
	callback()
}

exports.css = css;
exports.build = series(_clean, parallel(css))
exports.default = watch;