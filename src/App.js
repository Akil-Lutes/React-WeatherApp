import Header from './components/Header'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Datebox from './components/Datebox'
import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather'



const App = () => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');

const URL1 = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f1d7a51506ced100c8f5175e71c783e5';

  const handleChange = (e) => { 
    setQuery(e.target.value)
  }

  
  const search = async (e) => {
    const data = await fetchWeather(query);

    if(e.key === 'Enter') {
        setWeather(data)
        setQuery('');
    } 
  }

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

// I can nest if statement if < sunrise && > sunset ........ for night mode pictures/background
  const backgroundImg = (weather) => { 
    if (typeof weather.main != "undefined") {
      if (weather.weather[0].description === 'clear sky' || weather.weather[0].description === 'few clouds') {
        return 'sunny'
      } if (weather.weather[0].description === 'broken clouds' || weather.weather[0].description === 'scattered clouds') {
        return 'cloudy'
      } if (weather.weather[0].description === 'rain' || weather.weather[0].description === 'shower rain' || 'moderate rain') {
        return 'rain'
      } if (weather.weather[0].description === 'thunderstorm') {
        return 'thunderstorm'
      } if (weather.weather[0].description === 'snow') {
        return 'snow'
      } if (weather.weather[0].description === 'overcast clouds') {
        return 'overcast'
      } else {
        return 'app'
      }
    } 
      return backgroundImg;
  }

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
      className={backgroundImg(weather) }
     >
      <div>
      <Header />
      <Navbar />
      <Searchbar query={query} search={search} handleChange={handleChange} handleClick={handleClick} />
      <Datebox weather={weather} />
      </div>
    </div>
  );
}

export default App;

// ADD Default props ***************


