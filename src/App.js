import Header from './components/Header'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
// import { Styles } from './components/Styles'
import Datebox from './components/Datebox'
import Card from './components/Card'
import  { fetchWeather } from './api/fetchWeather'
import React, { useState } from 'react';
// const divStyle = {
//   background: Styles.background,
//   height: '100%'
// }

// When I see variables or words greyed out, I might need to pass as a prop, or use that variable
// useStates initialized
// Event handlers are here
const App = () => {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');

  const handleChange = (e) => { setQuery(e.target.value)}
  
  const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await fetchWeather(query);

        setWeather(data);
        setQuery('');
    }
}

  return (
    <div className="app">
      <div>
      <Header />
      <Navbar />
      <Searchbar query={query} search={search} handleChange={handleChange} />
      <Datebox weather={weather} />
      <Card
      title="Card Title"
      imageUrl=""
      body="Lorem Ipsum dummy texLorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis vitae similique recusandae architecto blanditiis numquam optio corrupti fugit ab. Consectetur odit ullam culpa sit iusto aspernatur repellat, consequuntur distinctio."
      />
      </div>
    </div>
  );
}

export default App;

