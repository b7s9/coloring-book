const { series, parallel } = require('gulp');
const { js } = require('./tasks/js.js')
const { css, minifyCss } = require('./tasks/css.js')
const del = require('del')

async function _clean(callback) {
	await del(path.join(__dirname, '../build/'))
	console.log('clean task')
	callback()
}

exports.css = css;
exports.build = series(_clean, parallel(css, js, static))
// exports.default = build;