document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for Fun Fact Toggle
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

    // JavaScript for Hamburger Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});
