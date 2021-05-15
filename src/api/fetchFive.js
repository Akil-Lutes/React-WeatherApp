import axios from 'axios';
import  { API_KEY } from './api/fetchWeather'

const URL5 = 'api.openweathermap.org/data/2.5/forecast';

export const fetchFive = async (query) => {
    const { data } = await axios.get(URL5, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

    return data;
}
