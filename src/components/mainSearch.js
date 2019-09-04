import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import './../App.css';

class MainSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    return (
        <div className= "MainSearch">
            <div className = "cityContent">
                <p className= "cityContentHeader">WIDEN YOUR TURKEY</p>
                <p className = "cityContentHeader2">Antalya</p>
            </div>
            <p className = "cityContentText">Antalya's warm climate, beautiful beaches and luxury resorts make it the perfect place to spend a hard-earned break, which is why it’s the first place to spring to mind whenever Turks hear the words "summer holiday." With recent investments in golf courses bringing record numbers of visitors to the area, Antalya has a whole host of things to offer, making it an unbeatable holiday destination.</p>
            <div>
                <div className = "searchContainer">
                    <p className = "Container1Text">Property Turkey For Sale</p>
                    <div className = 'searchInput'>
                        <img className= "locationLogo" src = {location_logo}/>
                        <input className = "locationInput" type="text" value = "Start typing to select a location"/>
                    </div>
                </div>
                <div className = "searchOptions2">
                    <div className = "searchOptions">
                        <p className ="searchOptionText">Property Types</p>
                    </div>
                    <div className = "searchOptions">
                        <p className ="searchOptionText">Property Types</p>
                    </div>
                    <div className = "searchOptions">
                        <p className ="searchOptionText">Property Types</p>
                    </div>
                    <div className = "searchOptions">
                        <p className ="searchOptionText">Property Types</p>
                    </div>
                </div>
                <div className = "searchBox">
                    <p className = "searchBoxText">2145</p>
                    <img className = "searchIcon" src = {search_icon}/>
                </div>
            </div>
        </div>
    );
  }
}

export default MainSection;
