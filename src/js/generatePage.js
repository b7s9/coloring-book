import { coloringBookData } from './coloringBookData.js';

const undoBtn = document.querySelector('.tools .undo button')
const redoBtn = document.querySelector('.tools .redo button')

const canvas = document.getElementById('canvas');
const authorElement = document.querySelector('.coloring-page .author .attribution')

// --------------------------------------------------------
// SVG and path functions
// --------------------------------------------------------

function fill(path) {
	historyAddStep(path, selectedColor);
	path.style.fill = selectedColor
}

const getPaths = (svg) => {
	const paths = svg.getElementsByClassName('svgfill');
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

		// we need to properly fetch SVG here

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

// --------------------------------------------------------
// Version history
// --------------------------------------------------------

let version = {
	currentState: 0,
	history: []
}

const historyAddStep = (path, newColor) => {
	// if there is no previous color set to transparent
	const oldColor = path.style.fill || 'rbga(0,0,0,0)';

	version.history.push({
		pathRef: path,
		prevColor: path.style.fill,
		nextColor: newColor
	})
	if (version.history.length === version.currentState + 1) {
		version.currentState++;
	} else {
		version.currentState = version.history.length - 1;
	}

	// if more than 90 steps in version history,
	// delete oldest step 
	if (version.history.length > 90) {
		version.history.splice(0, 1)
	}
}

const historyUndoStep = () => {
	if (version.history.length > 0 && version.currentState > 0) {
		const step = version.history[--version.currentState];
		step.pathRef.style.fill = step.prevColor;
	} else {
		console.log('no steps to undo')
	}
}

const historyRepeatStep = () => {
	if (version.currentState < version.history.length) {
		const step = version.history[version.currentState++];
		step.pathRef.style.fill = step.nextColor;
	} else {
		console.log('no steps to redo')
	}
}

// --------------------------------------------------------
// Event Listeners
// --------------------------------------------------------

getSvg(canvas).then(svg => {
	setTimeout(() => {
		getPaths(svg.contentDocument)
	}, 200);
})

window.addEventListener('hashchange', () => {
	getSvg(canvas).then(svg => {
		setTimeout(() => {
			getPaths(svg.contentDocument)
		}, 200);
	})
})

undoBtn.addEventListener('click', historyUndoStep)
redoBtn.addEventListener('click', historyRepeatStep)
