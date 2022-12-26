import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// markup
const galleryImg = galleryItems.map((element) => 
  
    `<div class="gallery__item">
     <a class="gallery__link" href="${element.original}">
     <img
        class="gallery__image"
        src="${element.preview}"
        data-source= "${element.original}"
        alt="${element.description}"
     />
     </a>
    </div>`).join("");

galleryEl.innerHTML = galleryImg;

// add eveny listener on div
galleryEl.addEventListener("click", onImageClick);
function onImageClick(event) {
    event.preventDefault();

    // Check if it's not image
    if (event.target.nodeName !== "IMG") {
        return;
    }

    // else use basiclightbox 
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    // close 
    galleryEl.addEventListener('keydown', onEscapeClose);

    function onEscapeClose(event) {
        if (event.code === 'Escape') {
            instance.close();
            galleryEl.removeEventListener('keydown', onEscapeClose);
        }
    };
};