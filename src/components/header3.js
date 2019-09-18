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
      <div class="hero-search row">
        <div class="location col-lg-3 col-9 row m-0 align-items-center">
            <div class="input">
                <div class="icon">
                    <img src={require("./../assets/images/icons/map-marker.png")} alt="" />
                </div>
                <input type="text" placeholder="İzmir"></input>
            </div>
        </div>

        <div class="col-lg-9 col-3 row m-0 p-0 align-items-center">
            <div class="form-box col-lg col-12 row m-0 align-items-center">
                <div class="form-item">
                    <div class="icon">
                        <img src={require("./../assets/images/icons/home.png")} alt="" />
                    </div>

                    <div class="title">
                        3 Properyty Types
                    </div>

                    <div class="icon">
                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt="" />
                    </div>
                </div>
            </div>

            <div class="form-box col-lg col-12 row m-0 align-items-center">
                <div class="form-item">
                    <div class="icon">
                        <img src={require("./../assets/images/icons/wallet.png")} alt="" />
                    </div>

                    <div class="title">
                        Any Price
                    </div>

                    <div class="icon">
                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt=""/>
                    </div>
                </div>
            </div>
            <div class="form-box col-lg col-12 row m-0 align-items-center">
                <div class="form-item">
                    <div class="icon">
                        <img src={require("./../assets/images/icons/bedroom.png")}alt="" />
                    </div>

                    <div class="title">
                        All Bedrooms
                    </div>

                    <div class="icon">
                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")}alt=""/>
                    </div>
                </div>
            </div>
            
            <div class="form-box col-lg col-12 row m-0 align-items-center">
                <div class="form-item">
                    <div class="icon">
                        <img src={require("./../assets/images/icons/filter.png" )}alt="" />
                    </div>

                    <div class="title">
                        Advanced Filter
                    </div>

                    <div class="icon">
                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt=""/>
                    </div>
                </div>
            </div>
            <button class="col-lg-2 col-12">
                <span>2145</span> <img src={require("./../assets/images/icons/search.png")} class="img-fluid" alt="" />
            </button>
        </div>
    </div>
    );
  }
}

export default Header3;
