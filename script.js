const apiKey = '1b3d23eb2873fbdc9f708e9519e71349';
const city = 'Metro Manila'; 

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Display weather data on the page
        const dataSection = document.getElementById('data-section');
        const weatherInfo = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        dataSection.innerHTML = weatherInfo;
    })
    .catch(error => console.error('Error fetching weather data:', error));
