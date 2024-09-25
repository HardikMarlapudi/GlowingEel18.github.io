function drawStars() {
    const numStars = document.getElementById('stars').value;
    const canvas = document.getElementById('canvas');
    const error = document.getElementById('error');

    canvas.innerHTML = '';
    error.innerHTML = '';

    if(numStars <= 0){
        error.textContent = 'Invalid Input';
    }

    for(let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * (canvas.clientWidth - 5);
        const y = Math.random() * (canvas.clientHeight - 5);

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        star.addEventListener('click', () => {
            alert(`You clicked on star #${i + 1}`);
        });

        canvas.appendChild(star);
    }
}
