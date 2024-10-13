// Hamburger Menu Functionality
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbar.classList.toggle('active');
});

// Async function to fetch the JSON data
const fetchBooks = async () => {
    try {
        // Fetching the JSON data asynchronously
        const response = await fetch('../part06/data/popularBooks.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response as JSON
        return await response.json();
    } catch (error) {
        console.error('Error fetching the books:', error);
        // Display an error message on the page
        const container = document.getElementById('book-container');
        if (container) {
            container.innerHTML = '<p>Failed to load book data. Please try again later.</p>';
        }
        return []; // Return an empty array to handle errors gracefully
    }
};

// Function to display the books on the page
const displayBooks = async () => {
    const books = await fetchBooks();
    const booksGrid = document.getElementById('books-grid');
    
    // Check if the booksGrid element exists
    if (!booksGrid) {
        console.error('Books grid element not found');
        return;
    }

    books.forEach((book, i) => {
        console.log("book: ", book);
        booksGrid.appendChild(getBookItem(book, i + 1)); // Ensure unique IDs starting from 1
    });
};

const getBookItem = (book, i) => {
    // Create a new div element
    const div = document.createElement('div');
    div.id = 'book' + i; // Set an ID for the div
    div.className = 'book-item'; // Set a class for the div

    // Create a new image element
    const img = document.createElement('img');
    img.src = book.image || 'default-image.jpg'; // Use a default image if book.image is undefined
    img.alt = book.title || 'Book image'; // Set alt text
    img.width = 250; // Set width to 250px
    img.height = 250; // Set height to 250px
    div.appendChild(img);

    // Create a new anchor element
    const anchor = document.createElement('a');
    anchor.href = book.link || '#'; // Fallback to # if link is not provided
    anchor.target = '_blank'; // Open the link in a new tab

    // Create a new h3 element
    const heading = document.createElement('h3');
    heading.textContent = book.title || 'Untitled'; // Fallback if title is missing
    anchor.appendChild(heading);
    div.appendChild(anchor);

    // Create a new paragraph element
    const para = document.createElement('p');
    para.textContent = book.description || 'No description available.'; // Fallback for missing description
    div.appendChild(para);

    return div;
};

// Call the function to fetch and display books when the page loads
window.onload = () => displayBooks();
