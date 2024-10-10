// Async function to fetch the JSON data and replace the HTML elements
const fetchBooks = async () => {
    try {
        console.log('Fetching books...');  // Log that the fetch has started
        
        // Fetching the JSON data asynchronously
        const response = await fetch('./data/popularBooks.json'); // Ensure this path is correct
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response as JSON
        const data = await response.json();
        console.log('Books fetched successfully:', data); // Log the fetched data

        const books = data.books;
        if (!books || books.length === 0) {
            throw new Error('No books found in the JSON data.');
        }

        // Call the function to display books dynamically
        replaceHTMLWithBooks(books);
    } catch (error) {
        console.error('Error fetching the books:', error);
        const container = document.getElementById('book-grid');
        if (container) {
            container.innerHTML = '<p>Failed to load book data. Please try again later.</p>';
        }
    }
};

// Function to replace HTML elements with data from the JSON file
const replaceHTMLWithBooks = (books) => {
    const container = document.querySelector('.book-grid');
    console.log('Replacing HTML with fetched books...');  // Log that book rendering is starting

    // Ensure the container exists
    if (!container) {
        console.error('Error: .book-grid not found');
        return;
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    books.forEach((book, index) => {
        console.log(`Rendering book ${index + 1}:`, book);  // Log each book as it is being rendered

        // Create div for each book
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.id = `book${index + 1}`;

        // Create img element, ensure the image exists in JSON
        const img = document.createElement('img');
        img.src = book.img ? `images/${book.img}` : 'images/default.jpg'; // Fallback to 'default.jpg' if no image is provided
        img.alt = book.title ? book.title : 'Book Image';

        // Create anchor element for title
        const link = document.createElement('a');
        link.href = book.link ? book.link : '#'; // Fallback link if none provided
        link.target = "_blank";
        const title = document.createElement('h3');
        title.textContent = book.title ? book.title : 'Untitled Book'; // Fallback title if none provided
        link.appendChild(title);

        // Create p element for the description
        const description = document.createElement('p');
        description.textContent = book.description ? book.description : 'No description available.'; // Fallback description

        // Append img, link, and description to the book item
        bookItem.appendChild(img);
        bookItem.appendChild(link);
        bookItem.appendChild(description);

        // Append the book item to the container
        container.appendChild(bookItem);
    });

    console.log('Book rendering completed.');
};

// Call the function to fetch and display books when the page loads
window.onload = () => fetchBooks();
