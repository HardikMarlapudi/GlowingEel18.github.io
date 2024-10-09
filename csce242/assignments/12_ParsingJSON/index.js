// Async function to fetch the JSON data
const fetchIceCreams = async () => {
    try {
        // Fetching the JSON data asynchronously
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        
        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parsing the response as JSON
        const iceCreams = await response.json();

        // Calling the function to display ice creams
        displayIceCreams(iceCreams);
    } catch (error) {
        console.error('Error fetching the ice creams:', error);
        // Display an error message on the page
        const container = document.getElementById('ice-cream-container');
        if (container) {
            container.innerHTML = '<p>Failed to load ice cream data. Please try again later.</p>';
        }
    }
};

// Arrow function to display the ice creams on the page
const displayIceCreams = (iceCreams) => {
    const container = document.getElementById('ice-cream-container');

    // Ensure the container exists
    if (!container) {
        console.error('Error: #ice-cream-container not found');
        return;
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    iceCreams.forEach(iceCream => {
        // Create div for each ice cream
        const iceCreamItem = document.createElement('div');
        iceCreamItem.classList.add('ice-cream-item');

        // Create img element
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        img.alt = iceCream.name;

        // Error handling for missing images (optional)
        img.onerror = () => {
            img.src = 'fallback-image.jpg'; // A default image to show in case the fetch fails
        };

        // Create overlay for ice cream name
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.textContent = iceCream.name;

        // Append img and overlay to the ice cream item
        iceCreamItem.appendChild(img);
        iceCreamItem.appendChild(overlay);

        // Append ice cream item to container
        container.appendChild(iceCreamItem);
    });
};

// Call the function to fetch and display ice creams when the page loads
window.onload = () => fetchIceCreams();
