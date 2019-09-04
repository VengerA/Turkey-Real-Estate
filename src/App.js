import React from 'react';

import Header from './components/header.js';
import Header2 from './components/header2.js';
import MainSearch from './components/mainSearch.js';
import Featured1 from './components/featured1.js';
import Featured2 from './components/featured2.js';
import Introduction from './components/introductions.js';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD"
    }
  }
  render(){
    return (
      <div>
        <Header/>
        <Header2/>
        <MainSearch/>
        <Featured1/>
        <Featured2/>
        <Introduction/>
      </div>
    );
  }
}

export default App;
