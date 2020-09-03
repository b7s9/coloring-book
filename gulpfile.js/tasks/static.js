const { dest, src } = require('gulp')
const path = require('path')
const del = require('del')
const imagemin = require('gulp-imagemin')
const shell = require('gulp-shell')

const binDir = path.join(__dirname, '../../bin/)')
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
	return src('*.jpg', { read: false })
		.pipe(shell('echo hello, hello'))
		.pipe(shell([`sh ${binDir}static.sh -i`]))

	// .pipe(dest(imagesDirDest))
}

function _static(callback) {
	_copyImages()
	// run('sh '+binDir+'static.sh')
	// shell([`echo ${binDir}static.sh -i`])
	// shell.task(('echo hello world'))
	// run('babel index.js --out-file index.es5.js', {
	// 	env: { NODE_ENV: 'production' }
	// })
	callback()
}

exports.static = _static;