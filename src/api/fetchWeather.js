import axios from 'axios'

const URL1 = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f1d7a51506ced100c8f5175e71c783e5';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL1, {
        params: {
            q: query,
            units: 'imperial',
            APPID: API_KEY,
            // zip: query,
        }
    });

        return data;
    }
  



// Or for the URL, I can just have the real URL (no variable) with lat & lon template literal in the path.
// Watch video on how to store the variables for (params for function query, lat, & lon)

// export const fetchByLocation = async (crd) => {
//     const data1 = navigator.geolocation.getCurrentPosition(success, error, options);
//     console.log(`${crd.latitude}`)
//     }
