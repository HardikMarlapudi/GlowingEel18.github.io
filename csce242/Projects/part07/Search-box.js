document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('button');
    const searchInput = document.getElementById('search-box'); // Corrected ID

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText === "") {
            alert("Please enter a search term or URL.");
        } else {
            const urlPattern = /^(https?:\/\/)/;
            if (urlPattern.test(searchText)) {
                window.open(searchText, '_blank');
            } else {
                searchBook(searchText);
            }
        }
    });
});

// Function to search for books by name
function searchBook(searchText) {
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

    if (books[searchText]) {
        window.location.href = books[searchText];
    } else {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        window.location.href = googleSearchUrl;
    }
}

document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = document.getElementById("search-box").value;

    if (searchTerm) {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    } else {
        alert("Please enter a search term.");
    }
});
