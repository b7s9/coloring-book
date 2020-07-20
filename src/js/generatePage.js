import { coloringBookData } from './coloringBookData.js';

console.log(coloringBookData)
const canvas = document.getElementById('coloring-page');

// set a hash if there is none
let hash = (window.location.hash || '#0').substr(1);
console.log(hash)

let svg = document.createElement('object');
svg.setAttribute('data', coloringBookData.path + coloringBookData.coloringPageData[hash].filename)

canvas.appendChild(svg);
