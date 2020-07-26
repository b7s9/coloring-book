// swatch = the HTML element
// color = internal value

let selectedColor = '#000000';
let swatchColors = ['#00E8FC', '#F96E46', '#F9C846', selectedColor];
const swatches = document.querySelectorAll('.swatch button');
// const selectedSwatch = document.getElementById('selected');
const ultraSelect = document.getElementById('ultra-selected');

// AColorPicker.from('div#ultra-color-picker')
// 	.on('change', (picker, color) => {
// 		ultraSelect.style.backgroundColor = color;
// 		ultraSelect.style.borderColor = color;
// 		selectedColor = color;
// 	});

for (i = 0; i < swatches.length; i++) {
	// swatches[i].style.border = swatchColors[i]
	swatches[i].style.backgroundColor = swatchColors[i]
	let swatchColor = swatches[i].getAttribute('data-color')
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

function fill(shapeid) {
	document.getElementById(shapeid).style.fill = selectedColor
}


// on load and on hashchange, set all fillable paths to listen for click
