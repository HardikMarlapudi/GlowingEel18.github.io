// Array to store titles
const imageTitles = [
  "Party",
  "Clown",
  "Rain",
  "Paper",
  "Gardening",
  "Working"
];

// Array to store descriptions
const imageDescriptions = [
  "Party time with a cute hat!",
  "Look at that adorable clown!",
  "I think it's time to bring your umbrella.",
  "Ready to write something new.",
  "Time to dig the garden!",
  "Ready to Work!"
];

// Arrow function to update the image info based on index
const showInfo = (index) => {
  // Using destructuring to grab elements directly
  const [imageTitle, imageDescription] = [
    document.getElementById('image-title'),
    document.getElementById('image-description')
  ];
  
  // Update the content of the title and description
  imageTitle.textContent = imageTitles[index];
  imageDescription.textContent = imageDescriptions[index];
};
