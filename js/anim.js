const mainNav = document.querySelector(".main-nav");
const navBarToggle = document.querySelector(".navbar-toggle");

function reveal(){
  mainNav.classList.toggle("active");
}

navBarToggle.addEventListener('click', reveal, false);
