// 1. Count functionality
let count = 0;
document.getElementById('countColumn').addEventListener('click', function() {
    count++;
    document.getElementById('count').innerText = count;
});

// 2. Random Image refresh functionality
const randomImage = document.getElementById('random-image');
randomImage.addEventListener('click', function() {
    randomImage.src = "https://picsum.photos/200?random=" + Math.floor(Math.random() * 100);
});

// 3. Slider functionality to move the box
document.getElementById('slider').addEventListener('input', function() {
    let sliderValue = this.value;
    let box = document.getElementById('movableBox');
    // Calculate new position
    let newPosition = (sliderValue / 100) * 300;
    // Move the box to the left or right based on slider value
    box.style.transform = `translateX(${newPosition - 92}px)`; // Moves left and right
});
