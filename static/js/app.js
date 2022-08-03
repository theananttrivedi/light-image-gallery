const modalCloseButton = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image.zoom");
const images = document.querySelectorAll(".image-holder img");
modalCloseButton.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    modalImage.setAttribute("src", image.getAttribute("src"));
    modal.classList.add("active");
  });
});
