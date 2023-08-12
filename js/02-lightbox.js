// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// const galleryEL = document.querySelector(".gallery");

// galleryItems.forEach((item) => {
//   galleryEL.insertAdjacentHTML(
//     "beforeend",
//     `
//       <li class="gallery__item">
//        <a class="gallery__link" href="${item.original}">
//          <img
//          class="gallery__image"
//          src="${item.preview}"
//          alt="${item.description}"
//        </a>
//       </li>`
//   );
// });

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
//   captionsData: "alt",
// });

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = "";
for (const image of galleryItems) {
  const newImage = `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`;
  galleryEl.innerHTML += newImage;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});
