// Function to toggle the small screen menu
function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
}

// Function to show the selected exercise (Color Slider or Picture Chooser)
function showExercise(exercise) {
    const colorSlider = document.getElementById('colorSlider');
    const pictureChooser = document.getElementById('pictureChooser');
    
    if (exercise === 1) {
        colorSlider.style.display = 'block';
        pictureChooser.style.display = 'none';
    } else if (exercise === 2) {
        pictureChooser.style.display = 'block';
        colorSlider.style.display = 'none';
    }
}

// Function to update the color of the Color Slider section
function updateColor() {
    const redValue = document.getElementById('red').value;
    const colorSlider = document.getElementById('colorSlider');
    colorSlider.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    // Update the message based on the value of red
    const colorMessage = document.getElementById('colorMessage');
    
    if (redValue < 85) {
        colorMessage.textContent = "Cool tone of red!";
    } else if (redValue < 170) {
        colorMessage.textContent = "Moderate red tone!";
    } else {
        colorMessage.textContent = "Strong red tone!";
    }
}

// Function to show the picture based on the button clicked
function showPicture(size) {
    const picture = document.getElementById('picture');
    let imgUrl = '';

    if (size === 'small') {
        imgUrl = 'https://picsum.photos/200';
    } else if (size === 'medium') {
        imgUrl = 'https://picsum.photos/400';
    } else if (size === 'large') {
        imgUrl = 'https://picsum.photos/600';
    }

    picture.src = imgUrl;
    picture.classList.remove('hidden');
}
