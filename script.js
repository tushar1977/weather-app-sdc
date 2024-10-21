document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const unit = document.getElementById('unit').value;
    const apiKey = '9e3d10b9ec412f282086d1b52677f0cc';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const tempUnit = unit === 'metric' ? '°C' : '°F';
                const weather = `
                    <h2 class="text-2xl font-semibold">${data.name}</h2>
                    <p class="text-lg">Temperature: ${data.main.temp}${tempUnit}</p>
                    <p class="text-lg">Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weatherResult').innerHTML = weather;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p class="text-red-500">${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p class="text-red-500">Error fetching data</p>`;
        });
});
