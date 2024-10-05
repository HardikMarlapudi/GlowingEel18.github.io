document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('button[type="submit"]');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', (e) => {
        const searchText = searchInput.value.trim();

        if (searchText === "") {
            alert("Please enter a search term or URL.");
            e.preventDefault(); // Prevents action if the input is empty
        } else {
            // Check if the input is a valid URL (starts with http/https)
            const urlPattern = /^(https?:\/\/)/;
            
            if (urlPattern.test(searchText)) {
                // If it's a URL, navigate directly to the typed URL
                window.location.href = searchText;
            } else {
                // If it's not a URL, search using Google
                const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
                window.location.href = googleSearchUrl;
            }
        }
    });
});

// JavaScript to handle the search functionality

const searchBook = () => {
    // Get the search input
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    // Define a list of available books with their URLs
    const books = {
        "the awakening": "TheAwakening.html",
        "to kill a mockingbird": "TKAM.html",
        "fahrenheit 451": "Fahrenheit451.html",
        "trigger warning": "TriggerWarning.html",
        "smoke and mirrors": "Smoke&Mirrors.html",
        "strange chemistry": "StrangeChemistry.html",
        "gory details": "GoryDetails.html",
        "periodic tales": "PeriodicTales.html",
        "the view from the cheap seats": "CheapSeats.html",
        "how to take smart notes": "SmartNotes.html"
    };

    // Check if the input matches a book in the list
    if (books[searchInput]) {
        // Redirect to the corresponding book page
        window.location.href = books[searchInput];

    } else {
        // Show an alert or error message if the book is not found
        alert("Sorry, the book you're looking for is not available.");
    }
};
