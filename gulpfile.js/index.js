const { series, parallel } = require('gulp');
const del = require('del')
const path = require('path')
const { js } = require('./tasks/js')
const { css, minifyCss } = require('./tasks/css')
const watch = require('./tasks/watch')

async function _clean(callback) {
	await del(path.join(__dirname, '../dist/'))
	callback()
}

exports.css = css;
exports.js = js;
exports.watch = watch;
exports.clean = _clean;
exports.build = parallel(css, js)
exports.default = series(parallel(css, js), watch); // gulp has so many damn bugs idk why this doesn't work