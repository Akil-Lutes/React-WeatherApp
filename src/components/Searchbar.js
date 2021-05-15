

const Searchbar = ({ query, setQuery, search, handleChange } ) => {
    


    return (
        <div className="flex justify-center border-2 border-yellow-600 p-8">
            <div className="bg-gray-200 flex items-center rounded-full shawdow-xl border-2 border-green-400 w-4/12">
                <input className="rounded-l-full w-10/12 py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Enter City Name" value={query} onChange={handleChange} onKeyPress={search}/>
    
                <div className="p-4 border-2 border-purple-600">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default Searchbar
