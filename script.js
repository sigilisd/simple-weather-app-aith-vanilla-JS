const API_KEY = 'f20357f814379be29922a1d77f18bb3b';
// Предзагрузка картинок
const images = ['sunny.jpg', 'cloudy.jpg', 'rainy.jpg'];
images.forEach((img) => {
    new Image().src = `images/${img}`;
});
// 1. Модуль логики (API)
const WeatherService = {
    async getWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Город не найден');
        return await response.json();
    }
};

// 2. Модуль UI (отображение)
const UI = {
    resultDiv: document.getElementById('weatherResult'),
    loader: document.getElementById('loader'),

    showLoading(isLoading) {
        this.loader.classList.toggle('hidden', !isLoading);
        this.resultDiv.classList.toggle('hidden', isLoading);
    },

    render(data) {
        this.resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div class="temp">${Math.round(data.main.temp)}°C</div>
            <p>${data.weather[0].description}</p>
        `;
    },

    showError(msg) {
        this.resultDiv.innerHTML = `<p style="color: red;">${msg}</p>`;
    }
};

// 3. Контроллер (связующее звено)
document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

    UI.showLoading(true);
    try {
        const data = await WeatherService.getWeatherData(city);
        UI.render(data);
        updateBackground(data.weather[0].main);
    } catch (err) {
        console.error("Ошибка при получении данных:", err);
        UI.showError(err.message);
    } finally {
        UI.showLoading(false);
    }
});

function updateBackground(weatherMain) {
    const condition = weatherMain.toLowerCase();
    // Очистка
    document.body.classList.remove('sunny', 'cloudy', 'rainy');
    // Логика добавления
    if (condition === 'clear') {
        document.body.classList.add('sunny');
    } else if (condition === 'clouds') {
        document.body.classList.add('cloudy');
    } else if (['rain', 'drizzle', 'thunderstorm'].includes(condition)) {
        document.body.classList.add('rainy');
    }
}