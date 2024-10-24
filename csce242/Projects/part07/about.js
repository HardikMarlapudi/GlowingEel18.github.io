// No hamburger menu needed, but here’s a sample of JS you might want for future enhancements

// Example: Smooth scroll for anchor links (if you want smooth scrolling for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add any additional JS functionality for other features here as needed
