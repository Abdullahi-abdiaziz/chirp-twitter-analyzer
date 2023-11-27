const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const icon = document.querySelector("#darkMode");
const menu = document.querySelector('#menu');
// const lightMode = document.querySelector("#lightMode");

const closed = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navbar.style.display = "flex";
});

closed.addEventListener("click", () => {
  navbar.style.display = "none";
});

function updateImage() {
  const image = document.getElementById("responsive-image");

  // desktop and mobile windows size
  if (window.innerWidth < 600 || window.innerWidth > 1000) {
    image.src = "Assets/hero-image-desktop.png";
  } else {
    image.src = "Assets/hero-image-laptop.png";
  }
}

// Initial update on page load
window.onload = updateImage;

// Update image on window resize
window.addEventListener("resize", updateImage);

// document.getElementById("darkMode").addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   changeIcon();
// });

// Dark & Light mode toggle
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  changeIcon();
})

function changeIcon() {
  if(document.body.classList.contains('dark')) {
    menu.src = "./Assets/light-menu.svg"
  } else {
    menu.src = "./Assets/dark-menu.svg";
  }
}

