import React from 'react';


import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';
import phone_logo from "./../static/phoneLogo.svg";
import whatsapp_logo from "./../static/whatsapp_logo.svg";
import hearth_icon from "./../static/hearth_icon.svg";
import flag from "./../static/flag.svg"


import './../App.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD"
    }
  }
  render(){
    return (
      <div className="Header">
        <a className="headerLogo">
          <p className="headerTitle">TURKEY REALESTATE</p>
        </a>
        <div className="socialLogos">
          <img className = "socialLogo" src = {facebook_logo}/>
          <img className = "socialLogo" src = {twitter_logo}/>
          <img className = "socialLogo" src = {instagram_logo}/>
          <img className = "socialLogo" src = {youtube_logo}/>
        </div>
        <div className="communication">
          <img className = "phoneLogo" src = {phone_logo}/>
          <p className= "internationalCalls">International Calls</p>
          <p className= "phoneNumber">+90 212 293 15 12</p>
          <div className = "headerWhatsapp"> 
            <img className = "whatsAppIcon" src = {whatsapp_logo}/>
          </div>
          <button className = "chosenLan">
            <img className = "flag" src = {flag}/>
            <p className = "flagText">$  {this.state.chosenLan}</p>            
          </button>
          <div className= "hearthIconDiv">
            <img className = "hearth_icon" src = {hearth_icon}/>
          </div>
          
        </div>  
      </div>
    );
  }
}

export default Header;
