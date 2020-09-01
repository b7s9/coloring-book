import { coloringBookData } from './coloringBookData.js';

const gallery = document.getElementById('gallery');

// thumbnail template 
/* <div class="item">
	<a href="./coloringpage.html#0">
		<img src="thumbnails/1.jpg" class="thumbnails">
	</a>
	<div class="attribution">
		<h3 class="author-prefix">By:</h3>
		<h3 class="author">author's name</h3>
	</div> */

gallery.innerHTML = ''

for (const [iterator, image] of coloringBookData.coloringPageData.entries()) {
	const i = iterator + 1;

	const item = document.createElement('div');
	item.classList.add('item');

	const link = document.createElement('a');
	link.href = `./coloringpage.html#${i - 1}`;
	item.appendChild(link);

	const img = document.createElement('img');
	img.src = `thumbnails/${i}.jpg`;
	img.setAttribute('alt', `Coloring book page by ${image.author}`)
	img.classList.add('thumbnails');
	link.appendChild(img);

	const attribution = document.createElement('div');
	attribution.classList.add('attribution');
	item.appendChild(attribution)

	const authorPrefix = document.createElement('h3');
	authorPrefix.classList.add('author-prefix')
	authorPrefix.innerText = `By: `
	attribution.appendChild(authorPrefix)

	const author = document.createElement('h3');
	author.classList.add('author')
	author.innerText = `${image.author}`
	attribution.appendChild(author)

	gallery.appendChild(item)
}