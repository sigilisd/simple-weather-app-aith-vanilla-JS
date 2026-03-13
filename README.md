[![Maintainability](https://qlty.sh/gh/sigilisd/projects/simple-seather-app-aith-vanilla-JS/maintainability.svg)](https://qlty.sh/gh/sigilisd/projects/simple-seather-app-aith-vanilla-JS)
# 🌤️ Simple Weather App

Адаптивное веб-приложение для получения прогноза погоды в реальном времени. Пользователь вводит название города, и приложение мгновенно отображает текущую температуру, описание погодных условий и соответствующую иконку. 

Проект демонстрирует навыки работы с асинхронными запросами (Fetch API), обработку ошибок и динамическое обновление DOM. Особое внимание уделено безопасности: API-ключ скрыт с помощью GitHub Secrets, а процесс развертывания полностью автоматизирован через CI/CD.

## 🛠 Стек технологий

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (современный модульный подход)
* **Backend:** Нет (клиентское приложение)
* **API:** [OpenWeatherMap API](https://openweathermap.org/api)
* **CI/CD:** GitHub Actions (автоматизация деплоя и безопасная подстановка ключей)

## 🚀 Ссылка на деплой

Приложение опубликовано и доступно по адресу:
👉 [https://sigilisd.github.io/simple-seather-app-aith-vanilla-JS/](https://sigilisd.github.io/simple-seather-app-aith-vanilla-JS/)

## 💻 Как запустить локально

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/sigilisd/simple-seather-app-aith-vanilla-JS.git
    ```
2.  **Подготовьте API-ключ:**
    Зарегистрируйтесь на [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) и получите бесплатный API-ключ.
3.  **Настройте ключ:**
    В файле `script.js` замените `API_KEY_PLACEHOLDER` на ваш реальный ключ (или используйте файл `config.js`, если вы запускаете проект не через GitHub Actions).
4.  **Запустите сервер:**
    Откройте `index.html` через расширение **Live Server** в VS Code.

---
*Проект выполнен в учебных целях.*
