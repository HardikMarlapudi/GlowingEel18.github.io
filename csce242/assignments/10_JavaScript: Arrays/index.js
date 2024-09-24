// Array of images with their titles and descriptions
const imagesArray = [
    {
        title: "Clown",
        description: "I think clowns are creepy",
        src: "images/clown.jpg"
    },
    {
        title: "Birthday",
        description: "Birthday parties are fun",
        src: "images/birthday.jpg"
    },
    {
        title: "Rain",
        description: "Rain can be relaxing",
        src: "images/rain.jpg"
    },
    {
        title: "Read",
        description: "Reading books is enjoyable",
        src: "images/read.jpg"
    },
    {
        title: "Shovel",
        description: "Shoveling is tiring",
        src: "images/shovel.jpg"
    },
    {
        title: "Work",
        description: "Working is necessary",
        src: "images/work.jpg"
    }
];

// Function to load images into the grid
function loadImages() {
    const imageGrid = document.getElementById('image-grid');

    imagesArray.forEach((image, index) => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;

        // Set click event to display title and description
        imgElement.addEventListener('click', () => displayInfo(index));

        imageBox.appendChild(imgElement);
        imageGrid.appendChild(imageBox);
    });
}

// Function to display image title and description
function displayInfo(index) {
    const titleElement = document.getElementById('image-title');
    const descElement = document.getElementById('image-desc');

    titleElement.textContent = imagesArray[index].title;
    descElement.textContent = imagesArray[index].description;
}

// Load images on page load
window.onload = loadImages;
