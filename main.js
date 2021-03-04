const backToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 1000) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#open-close").addEventListener("click", () => {
  document.querySelector(".nav-content").classList.toggle("active");
});
document.querySelector("#open-close").addEventListener("click", () => {
  document
    .querySelector(".components-icon")
    .classList.toggle("components-icon-rotate");
});

document.querySelector("#open-close-2").addEventListener("click", () => {
  document.querySelector(".nav-content-2").classList.toggle("active");
});
document.querySelector("#open-close-2").addEventListener("click", () => {
  document
    .querySelector(".components-icon-2")
    .classList.toggle("components-icon-2-rotate-2");
});

document.querySelector("#open-close-3").addEventListener("click", () => {
  document.querySelector(".nav-content-3").classList.toggle("active");
});
document.querySelector("#open-close-3").addEventListener("click", () => {
  document
    .querySelector(".components-icon-3")
    .classList.toggle("components-icon-3-rotate-3");
});

document.querySelector("#open-close-4").addEventListener("click", () => {
  document.querySelector(".nav-content-4").classList.toggle("active");
});
document.querySelector("#open-close-4").addEventListener("click", () => {
  document
    .querySelector(".components-icon-4")
    .classList.toggle("components-icon-4-rotate-4");
});

document.querySelector("#menu-bar").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.toggle("active");
});
