

export const Datebox = ({ weather }) => {

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    

return (
    // I can change the layout of the weather information, ex. Make the city name font bigger and bolder.
    // I can add fa icons for the wind
    // I can nest if statement if < sunrise && > sunset ........ for night mode pictures/background
        <div className="main-container text-white text-center bg-gray-400 bg-opacity-25 rounded-md m-auto mt-20 border-2 border-yellow-600 w-1/5 p-4 px-6">
            {(typeof weather.main != "undefined") ? (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                        <div className="date">Today's Date: {dateBuilder(new Date())}</div>
                    </h2>
                    <div className="city-temp">
                        Temperature: {Math.round(weather.main.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>Now: {weather.weather[0].description}</p>
                    </div>
                    <div>Wind Speed: {weather.wind.speed}mph</div>
                    <div>Wind Gust: {weather.wind.gust}mph</div>
                </div>
            ) : ('')}
        </div>
);
}


export default Datebox
