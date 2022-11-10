// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryRef = document.querySelector('.gallery')


const markup = galleryItems.map(({ preview, original, description }) =>
 `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);


new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250, alertError: false});
console.log(galleryItems);
