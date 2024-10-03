document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('button[type="submit"]');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function(e) {
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
