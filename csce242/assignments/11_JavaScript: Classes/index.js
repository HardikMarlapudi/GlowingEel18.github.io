// Bird class definition
class Bird {
    constructor(name, size, lifespan, food, habitat, interestingFact, imageUrl) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.imageUrl = imageUrl;
    }

    // Method to return a basic section for the bird (card)
    getSection() {
        // Create the bird card element
        const card = document.createElement('div');
        card.className = 'bird-card';
        
        // Set up the bird card content
        const cardContent = `
            <h3>${this.name}</h3>
            <img src="${this.imageUrl}" alt="${this.name}">
        `;
        card.innerHTML = cardContent;

        // Add an event listener to the card for the modal
        card.addEventListener('click', () => {
            showModal(this);
        });

        return card;
    }

    // Method to return the expanded section for the modal
    getExpandedSection() {
        return `
            <div>
                <h2>${this.name}</h2>
                <img src="${this.imageUrl}" alt="${this.name}">
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
            </div>
        `;
    }
}

// Array of bird objects
const birds = [
    new Bird("Hummingbird", "2.5 inches", "3-5 years", "Nectar", "Trees", "Nicknamed 'Hummers'", "images/hummingbird.jpg"),
    new Bird("Blue Jay", "9-12 inches", "7 years", "Seeds, Nuts", "Forests", "Can mimic hawks", "images/bluejay.jpg"),
    new Bird("Cardinal", "8-9 inches", "3 years", "Seeds", "Woodlands", "Known for bright red color", "images/cardinal.jpg"),
    new Bird("Robin", "10 inches", "2 years", "Insects, Worms", "Gardens", "Famous for early morning songs", "images/robin.jpg")
];

// Function to display the bird cards in the DOM
function displayBirds() {
    const birdContainer = document.getElementById('birdContainer');
    birds.forEach(bird => {
        birdContainer.appendChild(bird.getSection());
    });
}

// Function to show the modal with detailed bird info
function showModal(bird) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = bird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('birdModal').style.display = 'none';
}

// Add event listener for close button
document.querySelector('.close').addEventListener('click', closeModal);

// Close modal if clicked outside the modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('birdModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Display birds when the page loads
document.addEventListener('DOMContentLoaded', displayBirds);
