import React from 'react';

import HeaderSection from './headersSection';
import Subscribe from './subscribe.js';
import Footer from './footer.js';
import Footer2 from './footer2.js';
import Property1 from './property1.js';
import PropertyHelp from './propertyHelp.js';

import queryString from 'query-string'
import axios from 'axios';

import './../App.css';

class PropertyPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      propertyDetails: undefined
    }
  }

  componentWillMount() {
    this.getPropertyDetails()
  }

  getPropertyDetails = () => {
    let propertyId= queryString.parse(this.props.location.search).pid

    if (propertyId === undefined) {
        return
    }

    var vm = this

    axios.get('http://138.201.16.232/properties/'+propertyId+'/')
      .then(res => {
          vm.setState({ propertyDetails: res.data })
      })
  }

  render(){
    
    return (
      <div className = "container-fluid" id = "app">
        <div className ="general-container">
          <HeaderSection/>
          <main id="main" class="property row">
            <Property1 property={this.state.propertyDetails} />
            <PropertyHelp property={this.state.propertyDetails} />
          </main>
        
          <footer id="footer">
            <Subscribe/>
            <Footer/>
            <Footer2/>
          </footer>
        </div>
      </div>
    );
  }
}

export default PropertyPage;
