import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");

function createGallaryMarcap(arr) {
    return arr.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join("");
}

galleryRef.insertAdjacentHTML('afterbegin', createGallaryMarcap(galleryItems));

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

console.log(galleryItems);
