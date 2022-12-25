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
        data-source= "${element.original}"
        alt="${element.description}"
     />
     </a>
    </div>`).join("");

galleryEl.innerHTML = galleryImg;

galleryEl.addEventListener("click", (event) =>{
    event.preventDefault();

    const originImage = event.target.dataset.source;
    let instance = basicLightbox.create(`
    <img src="${originImage}" width="800" height="600">
    `);
    instance.show();

});

galleryEl.addEventListener('keydown', onEscapeClose);

function onEscapeClose(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
};
 