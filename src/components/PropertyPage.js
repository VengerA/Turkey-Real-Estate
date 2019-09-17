import React from 'react';

import Header from './header.js';
import Header2 from './header2.js';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Property1 from './property1.js';
import PropertyHelp from './propertyHelp.js';
import Property2 from './property2.js';


import './../App.css';

class PropertyPage extends React.Component{
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
        <PropertyHelp/>
        <Property1/>
        <Property2/>
        <div className = "PropertyPageFooter">
          <Subscribe/>
          <Footer/>
          <Footer2/>
        </div>
        
      </div>
    );
  }
}

export default PropertyPage;
