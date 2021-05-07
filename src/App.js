import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
// import { Styles } from './components/Styles'
import Datebox from './components/Datebox'

// const divStyle = {
//   background: Styles.background,
//   height: '100%'
// }

class App extends React.Component {
  render() {
  return (
    <div className="app">
      <div>
      <Header />
      <Navbar />
      <Searchbar />
      <Datebox />
      </div>
    </div>
  );
  }
}

export default App;

