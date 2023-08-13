const apiKey = "17a87c3252f78a76c5882f6a5e492b8e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi";


async function checkWeather() {
    const respone = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await respone.json();
    
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("temp").innerHTML = data.main.temp;     
}

checkWeather();

