// Bird class definition
class Bird {
    constructor(name, species, image, habitat, diet, size, lifespan, food, fact) {
        this.name = name;
        this.species = species;
        this.image = image;
        this.habitat = habitat;
        this.diet = diet;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.fact = fact;
    }

    // Method to return the HTML section for a bird item (name and image)
    getSection = () => `
        <section class="bird-item">
            <h3>${this.name}</h3>
            <img src="images/${this.image}" alt="${this.name}">
        </section>
    `;

    // Method to return all the information formatted as a section for the modal
    getExpandedSection = () => `
        <section class="bird-details">
            <img src="images/${this.image}" alt="${this.name}">
            <div class="bird-details-content">
                <h3>${this.name}</h3>
                <p><strong>Size:</strong> ${this.species}</p>
                <p><strong>Lifespan:</strong> ${this.lifespan}</p>
                <p><strong>Food:</strong> ${this.food}</p>
                <p><strong>Habitat:</strong> ${this.habitat}</p>
                <p><strong>Interesting Fact:</strong> ${this.fact}</p>
                <p>Tiny little colorful birds that bring joy to everyone :)</p>
            </div>
        </section>
    `;
}

// Array of bird objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', 'hummingbird.jpg', 'Trees', 'Nectar (Sugar Water)', 'Tiny', '3-5 years', 'Nectar (Sugar Water)', 'They are nicknamed "Hummers"'),
    new Bird('Blue Jay', '10-12 inches', 'blueJay.jpg', 'Forests', 'Insects, nuts, seeds', 'Medium', '7 years', 'Insects, nuts, seeds', 'Known for their intelligence.'),
    new Bird('Cardinal', '8-9 inches', 'cardinal.jpg', 'Woodlands', 'Seeds, fruit, insects', 'Small', '3-6 years', 'Seeds, fruit, insects', 'They don’t migrate during the winter.'),
    new Bird('Robin', '9-11 inches', 'robin.jpg', 'Gardens, forests', 'Worms, fruit, insects', 'Medium', '2 years', 'Worms, fruit, insects', 'Robins are often seen during spring.')
];

// Function to display the bird list on the page
const displayBirds = () => {
    const birdContainer = document.getElementById('birdContainer');
    birds.forEach((bird, index) => {
        const birdSection = document.createElement('div');
        birdSection.innerHTML = bird.getSection();
        birdSection.addEventListener('click', () => showBirdDetails(index));
        birdContainer.appendChild(birdSection);
    });
};

// Function to display modal with bird details
const showBirdDetails = (birdIndex) => {
    const bird = birds[birdIndex];
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = bird.getExpandedSection();
    document.getElementById('birdModal').style.display = 'block';
};

// Function to close the modal
const closeModal = () => {
    document.getElementById('birdModal').style.display = 'none';
};

// Initialize bird display and add event listener to close modal
window.onload = () => {
    displayBirds();
    document.getElementById('closeModal').addEventListener('click', closeModal);
};
