AColorPicker.from('div#ultra-color-picker')
	.on('change', (picker, color) => {
		ultraSelect.style.backgroundColor = color;
		ultraSelect.style.borderColor = color;
		selectedColor = color;
	});

let selectedColor = '#000000';
function handleClick(index) {
	let clickedBoxColor = boxColors[index];

	boxSelect.style.backgroundColor = clickedBoxColor;

	selectedColor = clickedBoxColor;
}

function fill(shapeid) {
	document.getElementById(shapeid).style.fill = selectedColor
}

let boxColors = ['#00E8FC', '#F96E46', '#F9C846', selectedColor];
const boxes = document.querySelectorAll('.box');

const boxSelect = document.getElementById('selected');
const ultraSelect = document.getElementById('ultra-selected');

for (i = 0; i < boxes.length; i++) {
	boxes[i].style.border = boxColors[i]
	boxes[i].style.backgroundColor = boxColors[i]
}
