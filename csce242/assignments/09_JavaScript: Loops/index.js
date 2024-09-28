function drawStars() {
    const starCount = document.getElementById('starCount').value;
    const starCanvas = document.getElementById('starCanvas');
    const errorElement = document.getElementById('error');
    
    // Clear canvas and error message
    starCanvas.innerHTML = '';
    errorElement.textContent = '';
  
    // Validate input
    if (starCount <= 0 || isNaN(starCount)) {
      errorElement.textContent = '* Invalid Input';
      return;
    }
  
    // Draw stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.textContent = '★';
  
      // Random position
      const xPos = Math.floor(Math.random() * (starCanvas.offsetWidth - 20));
      const yPos = Math.floor(Math.random() * (starCanvas.offsetHeight - 20));
  
      star.style.left = `${xPos}px`;
      star.style.top = `${yPos}px`;
  
      // Add click event to show star number
      star.addEventListener('click', () => {
        alert(`Star ${i + 1}`);
      });
  
      starCanvas.appendChild(star);
    }
  }
  
  function draw() {
    const stars = document.getElementById('stars').value;
    if (!isNaN(stars) && stars > 0) {
        drawStars(stars);
        document.getElementById('feedback').textContent = `${stars} stars drawn!`;
    } else {
        document.getElementById('feedback').textContent = 'Please enter a valid number.';
    }
}
