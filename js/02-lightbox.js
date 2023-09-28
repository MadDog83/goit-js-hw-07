import { galleryItems } from './gallery-items.js';
// Change code below this line

// Отримання посилання на список галереї
const galleryList = document.querySelector('.gallery');

// Створення розмітки галереї
const galleryMarkup = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}).join('');

// Додавання розмітки до списку галереї
galleryList.innerHTML = galleryMarkup;

// Ініціалізація бібліотеки SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
