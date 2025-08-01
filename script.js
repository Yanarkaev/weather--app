let key = 'db69ca8c35f1409f80391800250507'
let api = `http://api.weatherapi.com/v1/current.json?key=${key}&lang=ru&q=`
let input = document.querySelector('.input')
let button = document.querySelector('.search-btn')

// let api = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Урус-Мартан&lang=ru`

let object = {
    "location": {
        "name": "Урус-Мартан",
        "region": "Chechnya Republic",
        "country": "Россия",
        "lat": 43.1286,
        "lon": 45.5431,
        "tz_id": "Europe/Moscow",
        "localtime_epoch": 1753003398,
        "localtime": "2025-07-20 12:23"
    },
    "current": {
        "last_updated_epoch": 1753002900,
        "last_updated": "2025-07-20 12:15",
        "temp_c": 37.1,
        "temp_f": 98.7,
        "is_day": 1,
        "condition": {
            "text": "Солнечно",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 5.4,
        "wind_kph": 8.6,
        "wind_degree": 350,
        "wind_dir": "N",
        "pressure_mb": 1004,
        "pressure_in": 29.64,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 27,
        "cloud": 5,
        "feelslike_c": 37.6,
        "feelslike_f": 99.7,
        "windchill_c": 37.1,
        "windchill_f": 98.7,
        "heatindex_c": 37.6,
        "heatindex_f": 99.7,
        "dewpoint_c": 14.8,
        "dewpoint_f": 58.7,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 8.9,
        "gust_mph": 6.2,
        "gust_kph": 9.9
    }
}

let weatherStatus = document.querySelector('.weather-status')
let weatherIcon = document.querySelector('.weather-icon')
let city = document.querySelector('.city')
let day = document.querySelector('.day')
let degreesc = document.querySelector('.degreesc')
let degreesf = document.querySelector('.degreesf')
let loader = document.querySelector('.loader')
let error = document.querySelector('.error')
let hasWeather = 0;



let infoWrapper = document.querySelector('.info-wrapper')


function render(obj) {
    weatherStatus.innerHTML = obj.current.condition.text
    weatherIcon.src = obj.current.condition.icon
    city.innerHTML = `${obj.location.name}, ${obj.location.region}`
    // day.innerHTML = obj.current.
    degreesc.innerHTML = obj.current.temp_c + " °C"
    degreesf.innerHTML = obj.current.temp_f + " °F"
}


async function getWeather(city) {
    loader.style.display = 'block'
    error.style.display = 'none'
    button.disabled = true
    hasWeather = 1
    infoWrapper.style.display = 'none'
    try {
        let request = await fetch(api + city);
        let response = await request.json();
        render(response)
        infoWrapper.style.display = 'flex'
    } catch {
        infoWrapper.style.display = 'none'
        error.style.display = 'block'
    } finally {
        hasWeather = 2
        loader.style.display = 'none'
        button.disabled = false

    }

}

button.addEventListener('click', function () {
    getWeather(input.value)
    // console.log(input.value);
});