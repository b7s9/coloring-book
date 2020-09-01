const { dest, src } = require('gulp')
const path = require('path')
const del = require('del')
const imagemin = require('gulp-imagemin')

const imagesDir = path.join(__dirname, '../../src/images/**/*)')
const imagesDirDest = path.join(__dirname, '../../dist/images/)')

// const thumbnailDir = path.join(__dirname, '../../src/**/*.(jpg|svg)')
// const thumbnailDir = path.join(__dirname, '../../src/**/*.(jpg|svg)')
const destDir = path.join(__dirname, '../../dist/')


// copy images
// copy SVG
// copy fonts
// copy thumbnails

function _copyImages() {
	return src(imagesDir)
		// .pipe(imagemin([
		// 	imagemin.optipng({ optimizationLevel: 5 }),
		// 	imagemin.mozjpeg({ quality: 75, progressive: true }),
		// ]))
		.pipe(dest(imagesDirDest))
}

function _static(callback) {
	_copyImages()
	callback()
}

exports.static = _static;