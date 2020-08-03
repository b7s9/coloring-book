import { coloringBookData } from './coloringBookData.js';

const canvas = document.getElementById('canvas');
const authorElement = document.querySelector('.coloring-page .author .attribution')

const getPaths = (svg) => {
	const paths = svg.getElementsByClassName('svgfill');
	console.log(paths)
	// get all fillable svg paths and fill with selected color onClick
	for (let path of paths) {
		path.addEventListener("click", () => {
			fill(path)
		})
	}
};

function getSvg(canvasElement) {
	return new Promise((resolve, reject) => {
		canvasElement.innerHTML = ''

		// set a hash if there is none
		let index = (window.location.hash || '#0').substr(1);
		index = parseInt(index);

		// fetch SVG here
		// add to DOM
		let svg = document.createElement('object');
		svg.setAttribute('data', coloringBookData.path + coloringBookData.coloringPageData[index].filename)
		canvasElement.appendChild(svg);

		// this could be parameterized
		authorElement.innerHTML = '';
		authorElement.textContent = coloringBookData.coloringPageData[index].author;
		resolve(svg)
	})
}

getSvg(canvas).then(svg => {
	setTimeout(() => {
		getPaths(svg.contentDocument)
	}, 200);
})

document.addEventListener('load', () => {
	getSvg(canvas).then(svg => {
		setTimeout(() => {
			getPaths(svg.contentDocument)
		}, 200);
	})
})

window.addEventListener('hashchange', () => {
	getSvg(canvas).then(svg => {
		setTimeout(() => {
			getPaths(svg.contentDocument)
		}, 200);
	})
})
