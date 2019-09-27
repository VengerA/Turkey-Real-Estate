import React from 'react';

import antalya_foto from './../static/antalya_foto.jpeg';
import phone_icon from './../static/phone_logo.svg';

import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';

import './../App.css';
import MainStore from './store'
import {observer }from 'mobx-react'
import axios from 'axios'

@observer
class GuideHover extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
    }
  }
    clickedCity = (city) =>{
        MainStore.clickedCity = city
        console.log(MainStore.clickedCity)
    }
    
    render(){
        
        const cityArr = MainStore.cities.map(item => {
            let output = null 
            output = ((
                <div class="guide-item col-lg-2 col-12">
                    <a href={"/City?city="+ item.id.toString() + "&page=1" }  class="guide-block">
                        <figure class="guide-image" style={{backgroundImage:'url('+'http://138.201.16.232'+item.gallery[0]+')'}}></figure>
                        <span class="details">
                            {item.name} 
                        </span>
                    </a>
                </div>
            ))
            return output
        })
        
        return (
            <div class="opener-menu">
                <div class="container">
                    <div class="row">
                        <div class="guide-list row m-0 col-12 p-0">
                            {cityArr}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GuideHover;
