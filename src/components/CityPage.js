import React from 'react';

import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import CityIntroduction from './cityIntroduction.js';
import PropertyList from './propertyListCity.js';
import HeaderSection from './headersSection';
import Header3 from './header3';

import './../App.css';
import queryString from 'query-string'

class City extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <div className = "container-fluid" id = "app">
        <div className = "general-container">
          <HeaderSection/>
          <main id = "main" class = 'city'>
          <div id ="hero-placeholder">
            <Header3/>
            <CityIntroduction cityId={queryString.parse(this.props.location.search).city} />
          </div>    
            <PropertyList
              cityId={queryString.parse(this.props.location.search).city}
              pageNumber={queryString.parse(this.props.location.search).page}
            />
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

export default City;
