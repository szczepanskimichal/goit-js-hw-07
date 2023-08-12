import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const galleryFragment = document.createDocumentFragment();

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description; // Dodajemy atrybut alt
  image.dataset.source = item.original;

  link.appendChild(image);
  galleryItem.appendChild(link);
  galleryFragment.appendChild(galleryItem);
});

galleryEl.appendChild(galleryFragment);

let keyboardListener = null; // Referencja do nasłuchiwania klawiatury

document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}">
  `);
  instance.show();

  if (!keyboardListener) {
    keyboardListener = (event) => {
      if (event.key === "Escape") {
        instance.close();
        window.removeEventListener("keydown", keyboardListener);
        keyboardListener = null;
      }
    };
    window.addEventListener("keydown", keyboardListener);
  }
};
