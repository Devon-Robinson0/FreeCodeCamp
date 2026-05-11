const gallery = document.querySelector(".gallery");
const thumbnails = gallery.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("#lightbox-image");
const closeBtn = lightbox.querySelector('#close-btn')

for (let thumbnail of thumbnails) {
  thumbnail.addEventListener("click", (e) => {
    showLightbox(e.target.src);
  });
}
function showLightbox(src) {
  let imgSrc = src.slice(0, src.indexOf('-thumbnail'));
  imgSrc += '.jpg';

  lightbox.style.display = 'flex';
  lightboxImg.src = imgSrc;

  setTimeout(() => {
    closeBtn.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', hideLightbox);
  }, 0);
}

const hideLightbox = () => {
  if (lightbox.style.display === 'flex') {
    lightbox.style.display = 'none';
  }
};
