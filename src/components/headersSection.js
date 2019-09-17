import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Property1 from './property1.js';
import PropertyHelp from './propertyHelp.js';
import Property2 from './property2.js';

import "./../assets/styles/css/bootstrap.min.css";
import "./../assets/styles/css/webfonts.css";
import "./../assets/styles/css/icomoon.css";
import "./../assets/styles/css/fontawesome.min.css";
import "./../assets/styles/css/main.css";

class PropertyPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <header id = "header">
        <Header/>
        <Header2/> 
      </header>
    );
  }
}

export default PropertyPage;
