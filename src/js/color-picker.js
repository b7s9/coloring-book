// swatch = the HTML element
// color = internal value

let selectedColor = '#00E8FC';
let swatchColors = ['#00E8FC', '#F96E46', '#F9C846', selectedColor];
const swatches = document.querySelectorAll('.swatch button');
// const selectedSwatch = document.getElementById('selected');
const ultraSelect = document.getElementById('ultra-selected');

const canvas = document.getElementById('canvas');
const paths = canvas.getElementsByClassName('svgfill');
console.log(paths)
// get all fillable svg paths and fill with selected color onClick
for (let path of paths) {
	path.addEventListener("click", () => {
		console.log('click')
		fill(path)
	})
}

function fill(path) {
	path.style.fill = selectedColor
}

// AColorPicker.from('div#ultra-color-picker')
// 	.on('change', (picker, color) => {
// 		ultraSelect.style.backgroundColor = color;
// 		ultraSelect.style.borderColor = color;
// 		selectedColor = color;
// 	});

for (i = 0; i < swatches.length; i++) {
	let swatchColor = swatches[i].getAttribute('data-color')
	swatches[i].style.backgroundColor = swatchColor;
	swatches[i].addEventListener('click', () => {
		updateSelectedColor(swatchColor);
	})
}

function updateSelectedColor(color) {
	let clickedBoxColor = color;
	console.log(clickedBoxColor)
	// selectedSwatch.style.backgroundColor = clickedBoxColor;
	selectedColor = clickedBoxColor;
}
