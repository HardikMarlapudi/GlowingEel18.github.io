const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbar.classList.toggle('active');
});
