import React from 'react'

const Header = () => {
    return (
        <div className="border border-black shadow-2xl bg-gray-300 opacity-55 rounded-full py-3 px-6 flex flex-col flex-wrap text-center justify-center md:w-6/12 mx-auto md:h-28">
            <div className="text-green-600 flex justify-center text-sm md:text-xl">
                Weather Forecast
            </div>
            <br></br>
            <div className="flex text-center justify-center text-sm md:text-xl">
            Search for your location!
            </div>
        </div>
    )
}

export default Header
