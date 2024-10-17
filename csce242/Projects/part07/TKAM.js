  // Fun Fact Button Toggle
  document.getElementById('reveal-fact').addEventListener('click', function() {
    var fact = document.getElementById('fact');
    if (fact.classList.contains('hidden')) {
        fact.classList.remove('hidden');
        this.textContent = 'Hide Fun Fact';
    } else {
        fact.classList.add('hidden');
        this.textContent = 'Reveal a Fun Fact';
    }
});

// Hamburger Menu Toggle
const mobileMenu = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navbar.classList.toggle('active');
});
