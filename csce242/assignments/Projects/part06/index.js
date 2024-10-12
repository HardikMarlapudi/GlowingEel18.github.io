// Function to fetch the JSON data and display it in an HTML table
/* async function fetchAndDisplayData() {
    try {
        // Fetch the data from the JSON file
        const response = await fetch('popularBooks.json');

        // Check if the fetch request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const data = await response.json();

        // Get the container where we will display the data
        const container = document.getElementById('data-container');

        // Create a table element
        const table = document.createElement('table');
        table.classList.add('data-table');

        // Check if data is an array and is not empty
        if (Array.isArray(data) && data.length > 0) {
            // Create the header row from the keys of the first object
            const headerRow = document.createElement('tr');
            Object.keys(data[0]).forEach(key => {
                const th = document.createElement('th');
                th.textContent = key;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);

            // Create a row for each object in the array
            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                table.appendChild(row);
            });

            // Append the table to the container
            container.appendChild(table);
        } else {
            // If no data is available
            container.innerHTML = '<p>No data available to display.</p>';
        }
    } catch (error) {
        console.error('Error fetching and displaying data:', error);
        document.getElementById('data-container').innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
}

// Call the function to fetch and display data when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayData);

// JavaScript to handle the hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navbar.classList.toggle('active');
    });
}); */

const getGenres = async () => {
    const url = "https://glowingeel18.github.io/csce242/assignments/Projects/part06/data/popularBooks.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error){
        console.log(error);
    }
};

const showGenres = async () => {
    let genres = await getGenres();

    genres.forEach((genre)=> {
     genresSection.append(getGenreItem(genre));
    });
};

const getGenreItem = (genre) => {
    let section = docuemnt.createElement("section");

    let h3 = document.createElement("h3");
    h3.innerText = genre.books;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(genre.type));
    ul.append(getLi(`Pr`))

    return section;
};

const getLi = data => {
    const li = document.createElement("li");
    ul.append(getLi(shoe))
    return li;
}

window.onload = () => showGenres();
