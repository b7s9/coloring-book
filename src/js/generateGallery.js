import { coloringBookData } from './coloringBookData.js';

const gallery = document.getElementById('gallery');

// thumbnail template 
/* <div class="item">
	<div class="icon-container">
		<i class="fa fa-pencil-square fa-3x" aria-hidden="true"></i>
	</div>
	<a href="./coloringpage.html#0">
		<img src="thumbnails/1.jpg" class="thumbnails">
	</a>
	<h3 class="author">By: Christina An</h3>
</div> */

gallery.innerHTML = ''

for (const [iterator, image] of coloringBookData.coloringPageData.entries()) {
	const i = iterator + 1;

	const item = document.createElement('div');
	item.classList.add('item');

	const iconContainer = document.createElement('div')
	iconContainer.classList.add('thumbnail-icon-container');
	item.appendChild(iconContainer);

	const icon = document.createElement('i');
	icon.classList.add('fa', 'fa-pencil-square', 'fa-3x', 'thumbnail-icon');
	icon.setAttribute('aria-hidden', 'true');
	iconContainer.appendChild(icon);

	const link = document.createElement('a');
	link.href = `./coloringpage.html#${i - 1}`;
	item.appendChild(link);

	const img = document.createElement('img');
	img.src = `thumbnails/${i}.jpg`;
	img.setAttribute('alt', `Coloring book page by ${image.author}`)
	img.classList.add('thumbnails');
	link.appendChild(img);

	const author = document.createElement('h3');
	author.classList.add('author')
	author.innerText = `By: ${image.author}`
	item.appendChild(author)

	gallery.appendChild(item)
}
