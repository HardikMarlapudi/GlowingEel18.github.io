// JavaScript to toggle the active class on the nav ul when the hamburger is clicked
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Filter functionality for books
const genreFilter = document.getElementById('genre-filter');
const books = document.querySelectorAll('.book-item');

genreFilter.addEventListener('change', (event) => {
    const filterValue = event.target.value;
    books.forEach((book) => {
        if (filterValue === 'all') {
            book.style.display = 'block';
        } else if (book.classList.contains(filterValue)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});
