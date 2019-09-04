import React from 'react';
import './../App.css';

class Header2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD"
    }
  }
  render(){
    return (
      <div className= "header2">
        <button className = "header2Help">
            <p className= "header2HelpText">How Can We Help You ?</p>
        </button>
        <a className = "navigators">
            <p className = "navigatorText">Property</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Find My Home</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Guide To Turkey</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Finance & Law</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Citizienship</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Blog</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">About Us</p>
        </a>
        <a className = "navigators">
            <p className = "navigatorText">Contact</p>
        </a>
      </div>
    );
  }
}

export default Header2;
