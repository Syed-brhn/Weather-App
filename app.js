const apiKey = "17a87c3252f78a76c5882f6a5e492b8e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".seach input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await respone.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})