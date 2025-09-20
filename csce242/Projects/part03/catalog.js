const genreSelect = document.getElementById('genre');
        const books = document.querySelectorAll('.book');

        genreSelect.addEventListener('change', function () {
            const selectedGenre = this.value;
            books.forEach(book => {
                if (selectedGenre === 'all' || book.getAttribute('data-genre') === selectedGenre) {
                    book.style.display = 'block';
                } else {
                    book.style.display = 'none';
                }
            });
});
