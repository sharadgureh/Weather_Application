const search_box = document.querySelector(".searchbar input")
const searchbtn = document.querySelector(".searchbar button")
const weathericon = document.querySelector(".weather-icon")
const key = '6d957f45c9a1292bf9142157ffd43704'
// var API_URL = "https://api.openweathermap.org/data/2.5/weather?q=&appid=&units=metric"
async function check_weather(city_name) {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}&units=metric`
    const response = await fetch(API_URL)
    let result = await response.json()
    console.log(result)

    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
    document.querySelector(".wind").innerHTML = result.wind.speed + "Km/h";
    if (result.weather[0].main == "Clouds") {
        weathericon.src = "image/images/clouds.png";
    }
    else if (result.weather[0].main == "Clear") {
        weathericon.src = "image/images/clear.png";
    }
    else if (result.weather[0].main == "Rain") {
        weathericon.src = "image/images/rain.png";
    }
    else if (result.weather[0].main == "Drizzle") {
        weathericon.src = "image/images/drizzle.png";
    }
    else if (result.weather[0].main == "Mist") {
        weathericon.src = "image/images/mist.png";
    }
}
searchbtn = addEventListener('click', () => {
    check_weather(search_box.value)
})

check_weather()