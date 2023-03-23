import { prod, dev } from './envirenment';

let apiKey = '&appid=';

if (prod.isLive) {
    apiKey += prod.apiKey;
}
else {
    apiKey += dev.apiKey;
}

async function GetWeatherDataForToday(city) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${apiKey}&units=imperial`);
    const data = await promise.json();
    return data;
}


async function SearchWeatherData(city) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}${apiKey}&units=imperial`);
    const data = await promise.json();
    return data;
}

export { SearchWeatherData, GetWeatherDataForToday }