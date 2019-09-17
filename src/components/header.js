import React from 'react';


import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';
import phone_logo from "./../static/phone_logo.svg";
import whatsapp_logo from "./../static/whatsapp_logo.svg";
import hearth_icon from "./../static/hearth_icon.svg";
import logo_icon from './../static/logo.svg'
import flag from "./../static/gb.png";
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
    return (
      <div class="top-header row align-items-center">
                    <div class="container-fluid">
                        <div class="row align-items-center m-0">
                            <div class="col-lg-3 col-12">
                                <div class="logo">
                                    <a href="#">
                                        <img src={require("./../assets/images/logo.png")} class="img-fluid" alt="" /> TURKEY REALESTATE
                                    </a>
                                </div>
                            </div>
                            
                            <div class="col-lg-2 col-12">
                                <div class="social-icons">
                                    <a href="#" class="social"><i class="icon-facebook"></i></a>
                                    <a href="#" class="social"><i class="icon-twitter"></i></a>
                                    <a href="#" class="social"><i class="icon-instagram"></i></a>
                                    <a href="#" class="social"><i class="icon-youtube"></i></a>
                                </div>
                            </div>

                            <div class="col-lg-7 col-12">
                                <div class="header-buttons">
                                    <div class="phone">
                                        <a href="#">
                                            <span class="icon"><i class="icon-phone"></i></span>
                                            International Calls
                                            <span>+90 212 293 1512</span>
                                        </a>
                                    </div>

                                    <div class="whatsapp">
                                        <a href="#" class="button">
                                            <i class="icon-whatsapp"></i>
                                        </a>
                                    </div>

                                    <div class="buttons lac-buttons">
                                        <div class="placeholder">
                                            <div class="current-language">
                                                <img src= {require("./../assets/images/icons/flags/english.png")} alt=""></img>
                                            </div>

                                            <span class="current-currency">
                                                $ USD
                                            </span>

                                            <span class="icon">
                                                <i class="fa fa-chevron-down"></i>
                                            </span>
                                        </div>

                                        <div class="landc-box">
                                            <div class="form-group language-group">
                                                <label class="title">Choose Language</label>

                                                <div class="select">
                                                    <div class="choice active" data-flag="assets/images/icons/flags/english.png">
                                                        <span class="icon">
                                                            <img src="assets/images/icons/flags/english.png" alt="" />
                                                        </span>
                                                        <span class="name">English</span>
                                                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                                                    </div>
                                                    <div class="choice" data-flag="assets/images/icons/flags/turkish.png">
                                                        <span class="icon">
                                                            <img src="assets/images/icons/flags/turkish.png" alt="" />
                                                        </span>
                                                        <span class="name">Turkish</span>
                                                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                                                    </div>
                                                    <div class="choice" data-flag="assets/images/icons/flags/dutch.png">
                                                        <span class="icon">
                                                            <img src="assets/images/icons/flags/dutch.png" alt="" />
                                                        </span>
                                                        <span class="name">Deutch</span>
                                                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group currency-group">
                                                <label class="title">Choose Currency</label>

                                                <div class="select">
                                                    <div class="choice active" data-value="$ USD">
                                                        <span class="currency">
                                                            $
                                                        </span>
                                                        <span class="name">Dolar</span>
                                                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                                                    </div>

                                                    <div class="choice" data-value='₺ TRY'>
                                                        <span class="currency">
                                                            ₺
                                                        </span>
                                                        <span class="name">TRY</span>
                                                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <button type="submit">CHANGE</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="favorite">
                                        <div class="row m-0">
                                            <div class="fav-btn">
                                                <span href="" class="favme dashicons dashicons-heart">
                                                    <i class="fa fa-heart"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}

export default Header;
