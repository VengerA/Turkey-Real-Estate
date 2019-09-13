import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
import ContactFooter from './contactFooter.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Header3 from './header3.js';
import ContactUs from './ContactUs.js';


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
        <Header/>
        <Header2/>
        <Header3/>
        <ContactUs/>
        <ContactFooter/>
        <Subscribe/>
        <Footer/>
        <Footer2/>
      </div>
    );
  }
}

export default ContactUsPage;
