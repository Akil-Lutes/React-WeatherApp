// import { Searchbar } from './components/Searchbar'

// {Math.round(weather.main.temp)}

export const Datebox = ({ weather, location }) => {

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
        <div className="main-container text-white text-center bg-gray-400 bg-opacity-25 rounded-md m-auto mt-20 border-2 border-yellow-600 w-1/5 p-4 px-6">
            {(typeof weather.main != "undefined") ? (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;F</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            ) : ('')}
        </div>
    // </div>
);
}



//     return (
//         <div className="main-container text-white text-center bg-gray-400 bg-opacity-25 rounded-md m-auto mt-20 border-2 border-yellow-600 w-1/5 p-4 px-6">
//             {weather.main && (
//                 <div className="city">
//                     <h2 className="city-name">
//                         <span>{weather.name}</span>
//                         <sup>{weather.sys.country}</sup>
//                     </h2>
//                     <div className="city-temp">
//                         {Math.round(weather.main.temp)}
//                         <sup>&deg;C</sup>
//                     </div>
//                     <div className="info">
//                         <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
//                         <p>{weather.weather[0].description}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

export default Datebox
