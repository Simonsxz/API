const weatherApiKey = 'cab44398ddef75ce4e9e515716b48592';
const weatherCity = 'New York';
const recipeApiKey = '49c4e5b7821441d6b6faae051fa5dfec';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=${weatherApiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(weatherData => {
        console.log(weatherData); 
        const weatherSection = document.getElementById('weather-section');
        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
        const weatherInfo = `
            <h2>Weather in ${weatherCity}</h2>
            <img src="${iconUrl}" alt="Weather Icon">
            <p>Temperature: ${Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
            <p>Visibility: ${weatherData.visibility / 1000} km</p>
        `;
        weatherSection.innerHTML = weatherInfo;
    })
    .catch(error => console.error('Error fetching weather data:', error));

    function searchRecipes() {
        const ingredientInput = document.getElementById('ingredient-input').value.trim();
        if (ingredientInput === '') {
            alert('Please enter an ingredient.');
            return;
        }
    
        const maxResults = 9; 
    
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientInput}&number=${maxResults}&apiKey=${recipeApiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(recipeData => {
                console.log(recipeData);
    
                // Display recipe information
                const recipesSection = document.getElementById('recipes'); // Change to recipes section
                let recipeHTML = '<h2>Recipes</h2>';
                recipeHTML += '<div class="recipe-container">';
                recipeData.forEach(recipe => {
                    recipeHTML += `
                        <div class="recipe-card">
                            <h3>${recipe.title}</h3>
                            <img src="${recipe.image}" alt="${recipe.title}">
                            <p>Missing Ingredients: ${recipe.missedIngredients.length}</p>
                            <p>Used Ingredients: ${recipe.usedIngredients.length}</p>
                        </div>
                    `;
                });
                recipeHTML += '</div>';
                recipesSection.innerHTML = recipeHTML; // Append to recipes section
            })
            .catch(error => console.error('Error fetching recipe data:', error));
    }