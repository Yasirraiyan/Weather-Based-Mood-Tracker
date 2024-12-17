document.addEventListener('DOMContentLoaded', () => {
    const weatherInfo = document.getElementById('weatherInfo');

    // Simulate fetching weather data
    const weatherData = {
        temperature: '25°C',
        condition: 'Sunny',
        humidity: '50%',
        wind: '15 km/h'
    };

    weatherInfo.innerHTML = `
        <p>Temperature: ${weatherData.temperature}</p>
        <p>Condition: ${weatherData.condition}</p>
        <p>Humidity: ${weatherData.humidity}</p>
        <p>Wind: ${weatherData.wind}</p>
    `;
});
