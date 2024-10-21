document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navbar.classList.toggle('active');
        });
    }

    // Fun fact reveal logic
    const revealFactButton = document.getElementById('reveal-fact');
    const fact = document.getElementById('fact');

    if (revealFactButton && fact) {
        revealFactButton.addEventListener('click', function() {
            if (fact.classList.contains('hidden')) {
                fact.classList.remove('hidden');
                this.textContent = 'Hide Fun Fact';
            } else {
                fact.classList.add('hidden');
                this.textContent = 'Reveal a Fun Fact';
            }
        });
    }
});
