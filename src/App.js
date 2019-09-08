import React from 'react';

import Header from './components/header.js';
import Header2 from './components/header2.js';
import MainSearch from './components/mainSearch.js';
import Featured1 from './components/featured1.js';
import Featured2 from './components/featured2.js';
import Introduction from './components/introductions.js';
import ContactFooter from './components/contactFooter.js';
import Subscribe from './components/subscribe.js';
import Footer from './components/footer.js';
import Footer2 from './components/footer2.js';
import SearchHover from './components/searchHover.js';
import Header3 from './components/header3.js';
import CityIntroduction from './components/cityIntroduction.js';
import PropertyList from './components/propertyList.js';
import SliderGallery from './components/SliderGallery.js';
import Citizenship from './components/Citizenship.js';
import About from './components/About.js';

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
        <ContactFooter/>
        <Subscribe/>
        <Footer/>
        <Footer2/>
        <SearchHover/>
        <Header/>
        <Header2/>
        <Header3/>
        <CityIntroduction/>
        <SliderGallery />
        <Citizenship />
        <About />
        {/* <PropertyList/> */}
      </div>
    );
  }
}

export default App;
