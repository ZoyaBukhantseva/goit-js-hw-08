import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector(".gallery")

const galleryCard = createGalleryCard(galleryItems)
galleryRef.insertAdjacentHTML('beforeend', galleryCard)

function createGalleryCard(galleryItems) {
   return galleryItems.map(({preview, original,  description}) => {
       return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" 
        title="${description}" /></a></li>`
   }).join('')
  
} 
const gallery = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250,});
console.log(galleryItems);
