document.getElementById('reveal-fact').addEventListener('click', function() {
    const fact = document.getElementById('fact');
    if (fact.classList.contains('hidden')) {
        fact.classList.remove('hidden');
    } else {
        fact.classList.add('hidden');
    }
});
