import React from 'react'

const Header = () => {
    return (
        <div className="border border-black shadow-2xl bg-gray-300 opacity-55 rounded-full py-3 px-6 flex flex-wrap content-start justify-center w-2/12 mx-auto h-28">
            <div className="text-green-600 text-2xl flex">
                Weather Forecast
            </div>
            <div className="flex text-2xl text-center">
            Search for your location!
            </div>
        </div>
    )
}

export default Header
