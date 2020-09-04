// import AColorPicker from './a-color-picker';

// swatch = the HTML element
// color = internal value

let selectedColor = '#00E8FC';
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const swatches = document.querySelectorAll('.swatch button');
const ultraSelect = document.getElementById('ultra-selected');
const colorPickerOpenBtn = document.getElementById('colorwheel');
const colorPickerCloseBtn = document.getElementById('ultra-color-picker-close');

AColorPicker.from('div#a-color-picker-container')
	.on('change', (picker, color) => {
		const hex = AColorPicker.parseColor(color, "hex");
		console.log(picker)
		console.log(hex)
		colorPickerOpenBtn.style.backgroundColor = hex;
		selectedColor = hex;
	});

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

colorPickerOpenBtn.addEventListener('click', (e) => {
	body.classList.add('scroll-none')
	overlay.setAttribute('aria-hidden', 'false')
})

colorPickerCloseBtn.addEventListener('click', (e) => {
	body.classList.remove('scroll-none')
	setTimeout(() => {
		overlay.setAttribute('aria-hidden', 'true')
	}, 120);
})
