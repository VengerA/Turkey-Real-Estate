import React from 'react';

import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';
import phone_logo from "./../static/phoneLogo.svg";
import whatsapp_logo from "./../static/whatsapp_logo.svg";
import hearth_icon from "./../static/hearth_icon.svg";
import flag from "./../static/flag.svg"


import './../App.css';

class Header3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD"
    }
  }
  render(){
    return (
      <div className="Header3">  
        <div className = "searchContainer3">
            <div className = 'searchInput3'>
                <img className= "locationLogo3" src = {location_logo}/>
                <input className = "locationInput3" type="text" placeholder = "Izmir"/>
            </div>
        </div>
        <div className = "searchOptions4">
            <div className = "searchOptions3">
                <p className ="searchOptionText3">Property Types</p>
            </div>
            <div className = "searchOptions3">
                <p className ="searchOptionText3">Property Types</p>
            </div>
            <div className = "searchOptions3">
                <p className ="searchOptionText3">Property Types</p>
            </div>
            <div className = "searchOptions3">
                <p className ="searchOptionText3">Property Types</p>
            </div>
        </div>
        <div className = "searchBox3">
            <p className = "searchBoxText3">2145</p>
            <img className = "searchIcon3" src = {search_icon}/>
        </div>
       
      </div>
    );
  }
}

export default Header3;
