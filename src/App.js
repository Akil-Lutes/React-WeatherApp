import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Datebox from './components/Datebox'
import React, { useState, useEffect} from 'react';



const App = () => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');



const URL1 = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f1d7a51506ced100c8f5175e71c783e5';

// I API called inside handleChange method inside if statement when I press entered, passed as prop
  const handleChange = (e) => { 
    if(e.key === 'Enter') {
    fetch(`${URL1}?q=${query}&units=imperial&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
      }
        setQuery(e.target.value)
  }

  // 
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      fetch(`${URL1}?q=${query}&units=imperial&APPID=${API_KEY}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
        }
  }

// I can nest if statement if < sunrise && > sunset ........ for night mode pictures/background
  const backgroundImg = ({weather}) => { 
    if (typeof weather.main != "undefined") {
      if (weather.weather[0].description === 'clear sky' || weather.weather[0].description === 'few clouds') {
        return 'sunny'
      } if (weather.weather[0].description === 'broken clouds' || weather.weather[0].description === 'scattered clouds') {
        return 'cloudy'
      } if (weather.weather[0].description === 'rain' || weather.weather[0].description === 'shower rain' || weather.weather[0].description === 'moderate rain' || weather.weather[0].description === 'very heavy rain') {
        return 'rain'
      } if (weather.weather[0].description === 'thunderstorm') {
        return 'thunderstorm'
      } if (weather.weather[0].description === 'snow') {
        return 'snow'
      } if (weather.weather[0].description === 'overcast clouds') {
        return 'overcast'
      }  else {
        return 'app'
      }
    }

    return backgroundImg;
  }

  // Search Button click function call
  const handleClick = () => {
    fetch(`${URL1}?q=${query}&units=imperial&APPID=${API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    console.log("Button works");
  }

  // Navigator Geolocation API Call
  const fetchWeatherLocate = (lat = 25, lon = 25) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    )
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        console.log(result);
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeatherLocate(position.coords.latitude, position.coords.longitude);
      },
    );
  }, []);


  return (
    <div 
      className={`
      ${backgroundImg({weather})}`}
     >
      <div>
      <Header />
      <Searchbar query={query}  handleChange={handleChange} handleClick={handleClick} handleKeyPress={handleKeyPress} />
      <Datebox weather={weather} />
      </div>
    </div>
  );
 
}

export default App;

// ADD Default props ***************
