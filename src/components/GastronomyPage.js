import React from 'react';

import HeaderSection from './headersSection';
import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Header3 from './header3.js';
import Gastronomy from './Gastronomy.js';


import './../App.css';

class GastronomyPage extends React.Component{
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
                <Gastronomy/>
                <ContactFooter/>
              </div>   
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

export default GastronomyPage;
