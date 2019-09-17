import React from 'react';

import HeaderSection from './headersSection';
import MainSearch from './mainSearch.js';
import Featured1 from './featured1.js';
import Featured2 from './featured2.js';
import Introduction from './introductions.js';
import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import SearchHover from './searchHover.js';
import Header3 from './header3.js';
import CityIntroduction from './cityIntroduction.js';
import PropertyList from './propertyList.js';
import SliderGallery from './SliderGallery.js';
import Citizenship from './Citizenship.js';
import About from './About.js';


import './../App.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <div className = "container-fluid" id = "app">
        <div className ="general-container">
          <HeaderSection/>
          <MainSearch/>
          <Featured1/>
          <Featured2/>
          <Introduction/>
          <ContactFooter/>
          <Subscribe/>
          <Footer/>
          <Footer2/>
        </div>
      </div>
    );
  }
}

export default Home;
