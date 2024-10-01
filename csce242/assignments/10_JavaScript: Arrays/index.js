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
  
  // Function to update the image info based on index
  function showInfo(index) {
      // Select the HTML elements for displaying the title and description
      const imageTitle = document.getElementById('image-title');
      const imageDescription = document.getElementById('image-description');
      
      // Update the content of these elements using arrays
      imageTitle.textContent = imageTitles[index];
      imageDescription.textContent = imageDescriptions[index];
  }
  