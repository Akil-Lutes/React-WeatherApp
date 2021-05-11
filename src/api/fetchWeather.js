import axios from 'axios';



const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid';
const API_KEY = 'f1d7a51506ced100c8f5175e71c783e5';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}