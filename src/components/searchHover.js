import React from 'react';

import antalya_foto from './../static/antalya_foto.jpeg';
import phone_icon from './../static/phone_logo.svg';

import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';

import './../App.css';

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
        ]
    }
  }
    render(){
        const propertiesArr = this.state.properties.map(item => {
            let output = null 
            output = ((
                <p className = "propertiesTag">{item}</p>
            ))
            return output;
        })
        const recommendArr = this.state.recomended.map(item => {
            let output = null
            output = ((
                <div className = "RecommendedContainer">
                    <p className = "RecommendedContent">{item}</p>
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
                        <input type = "number" className = "TagInput"/>
                        <input type = "number" className = "TagInput"/>
                        <input type = "number" className = "TagInput"/>
                        <input type = "number" className = "TagInput"/>
                        <input type = "number" className = "TagInput"/>
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
