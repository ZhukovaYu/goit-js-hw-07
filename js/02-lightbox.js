import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryImg = galleryItems.map((element) => 
  
    `<div class="gallery__item">
     <a class="gallery__link" href="${element.original}">
     <img
        class="gallery__image"
        src="${element.preview}"
        alt="${element.description}"
     />
     </a>
    </div>`).join("");

galleryEl.innerHTML = galleryImg;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
 