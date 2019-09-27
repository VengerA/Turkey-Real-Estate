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

import "./../assets/styles/css/bootstrap.min.css";
import "./../assets/styles/css/webfonts.css";
import "./../assets/styles/css/icomoon.css";
import "./../assets/styles/css/fontawesome.min.css";
import "./../assets/styles/css/main.css";



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
          <main id="main" class="home">
            <MainSearch/>
            <Featured1/>
            <Introduction/>
            <ContactFooter/>
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

export default Home;
