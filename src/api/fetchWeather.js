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
  

    // var options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0
    //   };
  
    //   function success(pos) {
    //     const crd = pos.coords;
  
    //     console.log('Your current position is:');
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //     console.log(`More or less ${crd.accuracy} meters.`);

    //     return pos
  
    //   function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    //   }
    // navigator.geolocation.getCurrentPosition(success, error, options);

// Or for the URL, I can just have the real URL (no variable) with lat & lon template literal in the path.
// Watch video on how to store the variables for (params for function query, lat, & lon)

// export const fetchByLocation = async (crd) => {
//     const data1 = navigator.geolocation.getCurrentPosition(success, error, options);
//     console.log(`${crd.latitude}`)
//     }

// lat = pos.coords.latitude
// lon = pos.coords.long
// ${lat} & ${lon}


// axios.get(URL, {
//     params: {
//       units: 'imperial',
//       APPID: API_KEY,
//     }
//   }).then(
//     (response) => {
//       setWeather(response.weather)
//     })
  //