import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
}).join('');

galleryBox.insertAdjacentHTML('beforeend', items);

var images = new SimpleLightbox('.gallery a');
images.on('show.simplelightbox', function () {
    images.options.captionsData = "alt";
    images.options.captionsDelay = 250;
    images.options.scrollZoom = false;
    images.options.scrollZoomFactor = 0;
});
