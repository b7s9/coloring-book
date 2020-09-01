const { dest, src } = require('gulp')
const path = require('path');
const del = require('del')
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')

const srcDir = path.join(__dirname, '../../src/**/*.css')
const destDir = path.join(__dirname, '../../dist/style')

function _minifyCss() {
	return src(srcDir)
		.pipe(sourcemaps.init())
		.pipe(concat('main.css'))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(destDir))
}

exports.minifyCss = _minifyCss

async function _css(callback) {
	await del(destDir)
	_minifyCss()
	callback()
}

exports.css = _css