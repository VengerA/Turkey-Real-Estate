import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import HeaderSection from './headersSection';
import ContactUs from './ContactUs.js';
import Header3 from './header3.js';

import './../App.css';

class ContactUsPage extends React.Component{
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
          <ContactUs/>
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

export default ContactUsPage;
