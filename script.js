// Fetch data from API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // Display data on the page
        const dataSection = document.getElementById('data-section');
        dataSection.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
    })
    .catch(error => console.error('Error fetching data:', error));
