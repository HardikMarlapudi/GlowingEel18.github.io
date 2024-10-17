const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});
