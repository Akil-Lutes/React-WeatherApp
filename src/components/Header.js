import React from 'react'

const Header = () => {
    return (
        <div className="border border-black shadow-2xl bg-gray-300 opacity-55 rounded-full py-3 px-6 flex flex-wrap content-start justify-center md:w-2/12 mx-auto md:h-28">
            <div className="text-green-600 flex text-sm md:text-xl">
                Weather Forecast
            </div>
            <div className="flex text-center text-sm md:text-xl">
            Search for your location!
            </div>
        </div>
    )
}

export default Header
