import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const items = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}"></a></div>`;
}).join('');

galleryBox.insertAdjacentHTML('beforeend', items);

galleryBox.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    const containImg = event.target.classList.contains('gallery__image');
    if (!containImg) {
        return;
    }
    const src = event.target.dataset.source;

    onModalOpen(src);
}

let instance;

function onModalOpen(source) {
    instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`, {
        onShow: (instance) => document.addEventListener("keydown", onEscape),
        onClose: (instance) => document.removeEventListener("keydown", onEscape),
    });
    instance.show();
}
function onEscape(event) {
    if (event.code === "Escape") {
        instance.close();
    }
}
