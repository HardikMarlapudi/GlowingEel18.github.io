function showInfo(title, description) {
    // Select the HTML elements for displaying the title and description
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    
    // Update the content of these elements
    imageTitle.textContent = title;
    imageDescription.textContent = description;
}
