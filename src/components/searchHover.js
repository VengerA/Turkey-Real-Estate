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
        const propertiesArr = MainStore.cities.map(item => {
            console.log(item)
            let output = null 
            output = ((
                <li><a href={"/City?city="+ item.id.toString() + "&page=1" }>Properties for Sale in {item.name}</a></li>     
            ))
            return output;
        })

        const PriceArr = this.state.priceArr.map(item => {
            console.log(item)
            let output = null 
            output = ((
                <li><a href="#">$ {item}</a></li>   
            ))
            return output;
        })
        const recomandedArr = MainStore.cities.map(item => {
            console.log(item)
            let output = null 
            output = ((
                    <div class="blog-block col-lg col-12">
                        <a href={"/City?city="+ item.id.toString() + "&page=1" } class="blog-item" style={{backgroundImage: 'url('+'http://138.201.16.232'+item.gallery[0]+')'}}>
                            <figure class="blog-image" >
                                </figure>
                            <div class="item-title" >
                                Best Luxury Property for sale in {item.name}
                            </div>
                        </a>
                    </div>
                ))
            return output;
        })
        
        return (
            <div class="opener-menu">
            <div class="container">
                <div class="row">
                    <div class="property-area col-12 p-0">
                        <div class="property-list row col-12 p-0 m-0">
                            <div class="properties col-lg-3 col-12">
                                <div class="section-title">
                                    TURKEY PROPERTIES
                                </div>

                                <ul>
                                   {propertiesArr}
                                </ul>
                            </div>

                            <div class="prices col-lg-3 col-12">
                                <div class="section-title">
                                    BY PRICE
                                </div>

                                <ul>
                                    {PriceArr}
                                </ul>
                            </div>
                        </div>
                        
                        <div class="blog-title col-12">WE RECOMMEND</div>
                            <div class="property-blogs row col-12 p-0 m-0">
                                {recomandedArr}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SearchHover;
