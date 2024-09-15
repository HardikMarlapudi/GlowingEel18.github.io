// 1. Count functionality
let count = 0;
document.getElementById('countColumn').addEventListener('click', function() {
    count++;
    document.getElementById('count').innerText = count;
});

// 2. Random Image refresh functionality
const randomImage = document.getElementById('random-image');
randomImage.addEventListener('click', function() {
    location.reload();
});

// 3. Slider functionality to move the box left and right equally within the orange border
document.getElementById('slider').addEventListener('range', function() {
    let sliderValue = this.value;
    let box = document.getElementById('movableBox');
    let container = document.getElementById('column'); // The container with the orange border

    // Calculate the width of the container and box
    let containerWidth = container.offsetWidth;
    let boxWidth = box.offsetWidth;

    // Calculate the range the box can move (container width - box width)
    let maxMove = containerWidth - boxWidth;

    // Calculate new position, where 50% slider value centers the box
    let newPosition = (sliderValue / 100) * maxMove - (maxMove / 2);

    // Move the box within the container
    box.style.transform = `translateX(${newPosition + 125}px)`;
});

// 3. Slider functionality to move the box left and right within the container
document.getElementById('slider').addEventListener('input', function () {
    let sliderValue = this.value;
    let box = document.getElementById('movableBox');
    let container = box.parentElement; // Get the parent container of the box

    // Calculate the width of the container and box
    let containerWidth = container.offsetWidth;
    let boxWidth = box.offsetWidth;

    // Calculate the range the box can move (container width - box width)
    let maxMove = containerWidth - boxWidth;

    // Calculate new position, where 0% slider value positions the box on the left, and 100% on the right
    let newPosition = (sliderValue / 100) * maxMove;

    // Move the box within the container
    box.style.transform = `translateX(${newPosition - 120}px)`;
});
