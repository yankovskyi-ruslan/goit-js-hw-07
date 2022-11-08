import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createMarkupGallery() {
  const addMarkup = galleryItems
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
    )
    .join("");
  return addMarkup;
}

galleryEl.insertAdjacentHTML("afterbegin", createMarkupGallery());
galleryEl.addEventListener("click", onClickImg);

function onClickImg(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    }
    const transitionLargeImg = basicLightbox.create(` <img
      src="${evt.target.dataset.source}"
      alt="${evt.target.alt}"
    />`,
        {
            onShow: () => { galleryEl.addEventListener('keydown', onPressEscape); },
            onClose: () => { galleryEl.removeEventListener('keydown', onPressEscape); },
        }
    );
    transitionLargeImg.show();

    function onPressEscape(evt) {
        if (evt.key === "Escape") {
            transitionLargeImg.close();  
        }
    }
}

console.log(galleryItems);
