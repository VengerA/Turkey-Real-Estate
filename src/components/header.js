import React from 'react';


import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';
import phone_logo from "./../static/phone_logo.svg";
import whatsapp_logo from "./../static/whatsapp_logo.svg";
import hearth_icon from "./../static/hearth_icon.svg";
import logo_icon from './../static/logo.svg'
import { Link } from "react-router-dom";


import './../App.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD",
      showCurrency : false
    }
  }

  showCurrency = () => {
    let current = this.state.showCurrency 
    this.setState({showCurrency : !current})
  } 

  render(){
    const currencyArr = () => {
      let output = null 
      if(this.state.showCurrency){
        output = ((
          <div className = "CurrencyHoverContainer">
            <div className = "CurrencyHover1">
              <p className = "CurrencyHover1Text">Choose Language</p>
              <select className = "CurrencyHoverSelect">
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
              </select>
            </div>
            <div className = "CurrencyHover1">
              <p className = "CurrencyHover1Text">Currency</p>
              <select className = "CurrencyHoverSelect">
                <option value="">US Dollar</option>
                <option value="">Euro </option>
              </select>
            </div>
            <button className = "CurrencyChangeButton">CHANCE</button>
          </div>
        ))
      }
      return output
    }
    return (
      <div className="Header">
        <Link className="headerLogo" to = "/">
          <img src = {logo_icon} className = "HeaderLogo"/>
          <p className="headerTitle">TURKEY REALESTATE</p>
        </Link>
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
          <button className = "chosenLan" onClick = {this.showCurrency} >
            <img className = "flag" src = {"./../static/gb.png"}/>
            <p className = "flagText">$  {this.state.chosenLan}</p>            
          </button>
          <div className= "hearthIconDiv">
            <img className = "hearth_icon" src = {hearth_icon}/>
          </div>
          
        </div>  
        {currencyArr()}
      </div>
    );
  }
}

export default Header;
