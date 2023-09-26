import { galleryItems } from './gallery-items.js';
// Change code below this line
// Отримуємо список ul.gallery
const list = document.querySelector(".gallery");
// Використовуємо map() для створення масиву елементів li на основі масиву galleryItems
const items = galleryItems.map(item => {
  // Створюємо елемент li
  const listItem = document.createElement("li");
  // Додаємо йому клас gallery__item
  listItem.classList.add("gallery__item");
  // Створюємо елемент a
  const link = document.createElement("a");
  // Додаємо йому клас gallery__link і атрибут href з посиланням на оригінальне зображення
  link.classList.add("gallery__link");
  link.href = item.original;
  // Створюємо елемент img
  const image = document.createElement("img");
  // Додаємо йому клас gallery__image і атрибути src, data-source і alt з даними з масиву galleryItems
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;
  // Додаємо елемент img до елемента a
  link.append(image);
  // Додаємо елемент a до елемента li
  listItem.append(link);
  // Повертаємо елемент li
  return listItem;
});
// Вставляємо усі елементи li за одну операцію у список ul.gallery
list.append(...items);

// Додаємо обробник події click на список ul.gallery
list.addEventListener("click", event => {
    // Запобігаємо переходу по посиланню за замовчуванням
    event.preventDefault();
    // Отримуємо елемент, на який було клікнуто
    const target = event.target;
    // Якщо цей елемент має клас gallery__image
    if (target.classList.contains("gallery__image")) {
      // Отримуємо значення атрибута data-source цього елемента
      const url = target.dataset.source;
      // Викликаємо функцію openModal і передаємо їй url
      openModal(url);
    }
  });

 // Створюємо змінну для збереження посилання на екземпляр модального вікна
let instance;

// Створюємо функцію openModal, яка приймає один параметр - url великого зображення
function openModal(url) {
  // Використовуємо метод basicLightbox.create() для створення екземпляру модального вікна з розміткою, яка містить елемент img з атрибутом src рівним url
  instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);
  // Використовуємо метод show() для відкриття модального вікна
  instance.show();
}

// Додаємо обробник події keydown на window
window.addEventListener("keydown", event => {
  // Якщо код натиснутої клавіші дорівнює "Escape"
  if (event.code === "Escape") {
    // Використовуємо метод close() для закриття модального вікна
    instance.close();
  }
});

console.log(galleryItems);
