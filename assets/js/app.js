const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarMenu = document.querySelector('.navbar-menu');
navbarToggleBtn.addEventListener('click', function () {
  document.querySelector('.navbar-menu').classList.toggle('hidden');
});
