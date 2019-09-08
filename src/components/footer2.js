import React from 'react';

import antalya_foto from './../static/antalya_foto.jpeg';
import phone_icon from './../static/phone_logo.svg';

import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';

import './../App.css';

class Footer2 extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          ],
    }
  }
  render(){
    return (
        <div className= "Footer3">
            <p className = "Footer2Rigths">All Rights Reserved for Istsanbul Invetment Group - TurkeyRealEstate.com  © 2019 | Terms of Use - Privacy Policy</p>
            <div className="Footer2socialLogos">
                <img className = "FsocialLogo" src = {facebook_logo}/>
                <img className = "FsocialLogo" src = {twitter_logo}/>
                <img className = "FsocialLogo" src = {instagram_logo}/>
                <img className = "FsocialLogo" src = {youtube_logo}/>
            </div>
        </div>
    );
  }
}

export default Footer2;
