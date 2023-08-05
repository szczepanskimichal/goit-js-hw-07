import { galleryItems } from "./gallery-items.js";

const galleryEL = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  galleryEL.insertAdjacentHTML(
    "beforeend",
    `
    <div class="gallery__item">
     <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" 
       data-source="${item.original}"/>
     </a>
    </div>`
  );
});

document.querySelector(".gallery").onclick = (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
		<img src="${event.target.dataset.source}">
	`);
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
};
