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
        
    }
  }
  render(){

    
    

    return (
      <div class="bottom-footer row align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-9 col-12">
                    <div class="copyright">All Rights Reserved for Istsanbul Invetment Group - TurkeyRealEstate.com  © 2019 | Terms of Use - Privacy Policy</div>
                </div>

                <div class="col-lg-3 col-12">
                    <div class="social-icons">
                        <a href="#" class="social"><i class="icon-facebook"></i></a>
                        <a href="#" class="social"><i class="icon-twitter"></i></a>
                        <a href="#" class="social"><i class="icon-instagram"></i></a>
                        <a href="#" class="social"><i class="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Footer2;
