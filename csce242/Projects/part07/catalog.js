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
