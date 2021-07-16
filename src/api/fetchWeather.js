import axios from 'axios'

const URL1 = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f1d7a51506ced100c8f5175e71c783e5';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL1, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
        }
    });

        return data;
    }
  
