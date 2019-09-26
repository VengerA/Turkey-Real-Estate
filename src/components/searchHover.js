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
class SearchHover extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        properties : [
            "Properties in İstanbul",
            "Properties in İzmir",
            "Properties in Yalova",
            "Properties in Trabzon",
            "Properties in Bodrum",
            "Properties in Fethiye",
            "Properties in Antalya",
        ],
        recomended :[
            "Best Luxury Property for sale in Turkey",
            "2345's new property in Turkey",
            "Most popular properties in Turkey",
            "Properties granting Turkish citizenship"
        ],
        priceArr: [
            "750.000 - 950.000",
            "950.000 - 1.150.000",
            "1.150.000 - 1.350.000",
            "1.350.000 - 1.550.000",
            "1.550.000 - 1.750.000",
            "1.750.000 - 1.950.000",
        ],
        cities : MainStore.cities
    }
  }
    clickedCity = (city) =>{
        MainStore.clickedCity = city
        console.log(MainStore.clickedCity)
    }

    componentWillMount() {
        this.getCities()
    }

    getCities = () => {
        axios.get("http://138.201.16.232/properties/cities/")
        .then(res => {
             MainStore.cities = [
                 ...res.data
                ]
             console.log(res)}
             )
    }

    
    render(){
        const propertiesArr = this.state.cities.map(item => {
            console.log(item)
            let output = null 
            output = ((
                <div onClick = {() => this.clickedCity(item)}>
                    <a href = "/city" className = "propertiesTag">{item.name}</a>
                </div>
                
                
            ))
            return output;
        })
        const recommendArr = this.state.recomended.map(item => {
            let output = null
            output = ((
                <div className = "RecommendedContainer">
                    <p className = "RecommendedContent">{item.name}</p>
                </div>
            ))
            return output;
        })
        
        return (
            <div className= "SearchHover">
                <div>
                    <div className = "SearchHoverRow1">
                        <p className ="SearchHoverHeader">TURKEY PROPERTIES</p>
                        {propertiesArr}
                    </div>
                    <div className = "SearchHoverRow2">
                        <p  className = "SearchHoverHeader">BY PRICE</p>
                        <button className = "TagInput">750.000 - 950.000</button>
                        <button  className = "TagInput">950.000 - 1.150.000</button>
                        <button  className = "TagInput">1.150.000 - 1.350.000</button>
                        <button  className = "TagInput">1.550.000 - 1.750.000</button>
                        <button className = "TagInput">1.750.000 - 1.950.000</button>
                    </div>
                    <div className ="SearchHover4">
                        <p className = "FutureHeader">MAP WILL BE ADDED HERE</p>
                    </div>
                </div>
                <div className = "SearchHoverRow3">
                    <p className = "SearchHoverHeader2">WE RECOMMEND</p>
                    <div className = "SearchHoverContainer">
                        {recommendArr}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchHover;
