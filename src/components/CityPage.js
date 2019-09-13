import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import SearchHover from './searchHover.js';
import Header3 from './header3.js';
import CityIntroduction from './cityIntroduction.js';
import PropertyList from './propertyList.js';

import './../App.css';

class City extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <div>
        <Header/>
        <Header2/>
        <Header3/>
        <CityIntroduction/>
        <PropertyList/>
        <ContactFooter/>
        <Subscribe/>
        <Footer/>
        <Footer2/>
      </div>
    );
  }
}

export default City;
