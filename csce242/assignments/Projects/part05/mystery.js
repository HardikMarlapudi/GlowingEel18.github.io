// Array of Mystery Books
const mysteryBooks = [
    {
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        description: "A classic mystery novel featuring Sherlock Holmes and Dr. Watson.",
        image: "hound_of_baskervilles.jpg"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        description: "A psychological thriller that dives deep into the secrets of marriage.",
        image: "gone_girl.jpg"
    },
    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        description: "A mystery about murder and secrets in a seemingly perfect community.",
        image: "big_little_lies.jpg"
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        description: "A gripping thriller about the search for a missing girl.",
        image: "girl_with_dragon_tattoo.jpg"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description: "A psychological mystery about a woman who refuses to speak after a horrific event.",
        image: "silent_patient.jpg"
    }
];

// Function to select a random mystery book
function displayRandomBook() {
    const randomIndex = Math.floor(Math.random() * mysteryBooks.length);
    const book = mysteryBooks[randomIndex];
    
    // Populate the featured book section with details
    const featuredBookElement = document.getElementById("featured-book");
    featuredBookElement.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>By ${book.author}</p>
        <p>${book.description}</p>
    `;
}

// Call the function to display the book when the page loads
window.onload = displayRandomBook;
