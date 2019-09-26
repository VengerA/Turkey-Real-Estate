import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
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
import HeaderSection from './headersSection';

import './../App.css';

class CitizienshipPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <div>
        <div className = "general-container">
          <HeaderSection/>
          <main id = "main" class = 'city'>
          <div id ="hero-placeholder">
            <Header3/>
          </div>    
          <Citizenship/>
            <ContactFooter/>
          </main>
          <footer id = "footer">
            <Subscribe/>
            <Footer/>
            <Footer2/>
          </footer>
        </div>
      </div>
    );
  }
}

export default CitizienshipPage;
