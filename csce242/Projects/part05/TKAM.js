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

// Select the mobile menu and the navbar
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('nav ul');

// Add event listener to the mobile menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Toggle active class for animation
    navbar.classList.toggle('active'); // Toggle active class to show/hide the navbar
});
