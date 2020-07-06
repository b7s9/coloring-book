let selectedColor = '#000000';
function handleClick(index) {
    let clickedBoxColor = boxColors [index];

    boxSelect.style.backgroundColor = clickedBoxColor;

    console.log(clickedBoxColor);
}

let boxColors = ['#00E8FC','#F96E46','#F9C846'];

const boxOne = document.getElementById ('box-1');
const boxTwo = document.getElementById ('box-2');
const boxThree = document.getElementById ('box-3');
const boxSelect = document.getElementById ('selected');

boxOne.style.border = boxColors [0];
boxOne.style.backgroundColor = boxColors [0];

boxTwo.style.border = boxColors [1];
boxTwo.style.backgroundColor = boxColors [1];

boxThree.style.border = boxColors [2];
boxThree.style.backgroundColor = boxColors [2];

boxSelect.style.border = selectedColor;
boxSelect.style.backgroundColor = selectedColor;

