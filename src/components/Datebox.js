// import { Searchbar } from './components/Searchbar'


const Datebox = ({ weather, setWeather }) => {

    const Datefinder = (d) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`

}
// This is where I am going to use API weather data , I think I am going to have to pass props
    return (
        <div className="text-white text-center bg-gray-400 bg-opacity-25 rounded-md m-auto mt-20 border-2 border-yellow-600 w-1/5 p-4 px-6">
            {weather.main && (
                <div>
            <h2 className="cityName text-white inline-block border-2 border-yellow-600">{weather.name}</h2>
            <sup>{weather.sys.country}</sup>
                <div className="text-white">
                    {Datefinder(new Date())}
                </div>
            <h2 className="currentWeather text-white">Sunny</h2>
            <div className="temp bg-purple-600 bg-opacity-25 text-6xl rounded-md inline-block">{Math.round(weather.main.temp)}</div>
            </div>
            )}
        </div>
    )
}

export default Datebox
