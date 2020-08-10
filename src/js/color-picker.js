// swatch = the HTML element
// color = internal value

let selectedColor = '#00E8FC';
const swatches = document.querySelectorAll('.swatch button');
const ultraSelect = document.getElementById('ultra-selected');

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
	selectedColor = clickedBoxColor;
}
