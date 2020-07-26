import { coloringBookData } from './coloringBookData.js';

const canvas = document.getElementById('coloring-page');

function getSvg(canvasElement) {
	canvasElement.innerHTML = ''

	// set a hash if there is none
	let index = (window.location.hash || '#0').substr(1);
	index = parseInt(index);

	let svg = document.createElement('object');
	svg.setAttribute('data', coloringBookData.path + coloringBookData.coloringPageData[index].filename)
	canvasElement.appendChild(svg);
}
getSvg(canvas)

document.addEventListener('load', () => {
	getSvg(canvas)
})

window.addEventListener('hashchange', () => {
	getSvg(canvas)
})
