import { galleryItems } from './gallery-items.js';

// Отримання посилання на список галереї
const galleryList = document.querySelector('.gallery');

// Створення розмітки галереї
const galleryMarkup = galleryItems.map(item => {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
}).join('');

// Додавання розмітки до списку галереї
galleryList.innerHTML = galleryMarkup;

// Додавання слухача подій для відкриття модального вікна
galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  instance.show();

 // Функція для закриття модального вікна
 const closeOnEscape = event => {
  if (event.key === 'Escape') {
    instance.close();
    window.removeEventListener('keydown', closeOnEscape);
  }
};

// Додавання слухача подій для закриття модального вікна
window.addEventListener('keydown', closeOnEscape);
});

console.log(basicLightbox);
console.log(galleryItems);
