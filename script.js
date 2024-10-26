const bankAccount = {
    ownerName: "John",
    accountNumber: "123456789",
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        document.getElementById('balance').innerText = `Залишок на рахунку: ${this.balance}`;
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            document.getElementById('balance').innerText = `Залишок на рахунку: ${this.balance}`;
        } else {
            alert("Недостатньо коштів");
        }
    }
};

const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};

function checkTemperature() {
    weather.temperature = document.getElementById('temperatureInput').value;
    const message = weather.isBelowZero() ? "температура нижче 0 градусів Цельсія" : "температура вище або рівна 0 градусів Цельсія";
    document.getElementById('temperatureMessage').innerText = message;
}

const user = {
    name: "",
    email: "",
    password: "",
    login() {
        this.name = document.getElementById('userName').value;
        this.email = document.getElementById('userEmail').value;
        this.password = document.getElementById('userPassword').value;
        const message = (this.email === "test@example.com" && this.password === "password") ? "Успішний вхід" : "Невірний email або пароль";
        document.getElementById('loginMessage').innerText = message;
    }
};

const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated() {
        return this.rating > 8;
    }
};

function checkMovieRating() {
    document.getElementById('movieTitle').innerText = `Title: ${movie.title}`;
    document.getElementById('movieDirector').innerText = `Director: ${movie.director}`;
    document.getElementById('movieYear').innerText = `Year: ${movie.year}`;
    document.getElementById('movieRating').innerText = `Rating: ${movie.rating}`;
    if (movie.isHighRated()) {
        document.getElementById('movieTitle').style.color = "green";
    }
}