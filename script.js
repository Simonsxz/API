const apiKey = 'cab44398ddef75ce4e9e515716b48592'; // Replace with your actual API key
const city = 'New York'; // You can change the city here

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
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Visibility: ${data.visibility / 1000} km</p>
        `;
        dataSection.innerHTML = weatherInfo;
    })
    .catch(error => console.error('Error fetching weather data:', error));
