//preloader

var preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  setTimeout(function () {
    preloader.classList.add("preload-finish");
  }, 7000);
});
