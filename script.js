const apiKey = 'cab44398ddef75ce4e9e515716b48592'; 
const city = 'New York';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
        const dataSection = document.getElementById('data-section');
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        const weatherInfo = `
            <h2>Weather in ${city}</h2>
            <img src="${iconUrl}" alt="Weather Icon">
            <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Visibility: ${data.visibility / 1000} km</p>
        `;
        dataSection.innerHTML = weatherInfo;
    })
    .catch(error => console.error('Error fetching weather data:', error));
