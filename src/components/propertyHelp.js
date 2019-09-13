import React from 'react';

import whatsapp_icon from './../static/whatsapp_logo.svg';
import helper_girl from './../static/helperGirl.svg'
import './../App.css';

class PropertyHelp extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <div className = "PropertyHelper">
        <p className = "PropertyHelperHeader">How can we help you?</p>
        <p className = "PropertyHelperContent">We are ready to support you with our expert team for all your questions </p>

        <input type = "text" className = "PropertyHelperInput" placeholder = "Full Name"/>
        <input type = "text" className = "PropertyHelperInput" placeholder = "Email"/>
        <input type = "text" className = "PropertyHelperInput" placeholder = "Phone Number"/>
        <textarea className = "PropertyHelperTextArea" placeholder = "Message" />
        
        <button className = "PropertyHelperButton">SEND MESSAGE</button>

        <div className = "PropertyHelperContainer">
            <div className = "PropertyHelperRow1">
                <img src = {helper_girl} className ="PropertyHelperImg"/>
            </div>
            <div className = "PropertyHelperRow1">
                <img src = {whatsapp_icon} className = "PropertyHelperIcon" />
                <p className = "PropertyHelperNum">+90 532 321 4321</p>
                <div className = "PropertyHelperBottom">
                    <p className = "PropertyHelperName">Tyra Willey</p>
                    <p className = "PropertyHelperTitle">Managing Director</p>
                </div> 
            </div>
        </div>
      </div>
    );
  }
}

export default PropertyHelp;
