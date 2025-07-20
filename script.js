let key = 'db69ca8c35f1409f80391800250507'
let api = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Урус-Мартан&lang=ru`


async function getWeather (){
    let request = await fetch(api);
    let response = await request.json();
    console.log(response)
}

getWeather()