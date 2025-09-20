
function filterBooks() {
    var genre = document.getElementById('genre').value;
    var books = document.getElementsByClassName('book-item');

    for (var i = 0; i < books.length; i++) {
        if (genre === 'all') {
            books[i].classList.remove('hidden');
        } else if (books[i].classList.contains(genre)) {
            books[i].classList.remove('hidden');
        } else {
            books[i].classList.add('hidden');
        }
    }
}
