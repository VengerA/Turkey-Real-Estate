import React from 'react';

import home_icon from "./../static/home.svg";
import bed_icon from "./../static/bed_logo.svg";
import bathroom_icon from "./../static/bathroom_logo.svg";
import border_home_icon from "./../static/cerceveEv_logo.png";

import './../App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        imgArr : [{item1:1},{tem2:2},{item3:3},{item:4}]
    }
  }
  render(){
    const imageArr = this.state.imgArr.map(item => {
            let output = (
                <div className = "Property1ImageElement">
                    <p>RESİM</p>
                </div>
            )
            return output
        })
        
    return (
        <div className = "Property1">
            <div className = "Property1ImageArr">
                {imageArr}
                <div className = "Property1ImageElement">
                        <p>+16</p>
                </div>
            </div>
            
            <div className = "Property1Footer">
                <p className = "Property1FooterLocation">İstanbul / Gaziosampaşa</p>
                <p className = "Property1FooterHeader">Ortayaka Residences</p>
                <p className = "Property1FooterStart">Starts From</p>
                <p className = "Property1FooterPrice">$ 445.500</p>
            </div>
            <div className = "PropertyFeatures">
                <div className = "PropertyFeature">
                    <img className = "PropertyFeatureIcon" src = {home_icon}/>
                    <p className = "PropertyFeatureText">Residence</p>
                </div>
                <div className = "PropertyFeature">
                    <img className = "PropertyFeatureIcon" src = { bed_icon}/>
                    <p className = "PropertyFeatureText">2 Bedroom</p>
                </div>
                <div className = "PropertyFeature">
                    <img className = "PropertyFeatureIcon" src = {bathroom_icon}/>
                    <p className = "PropertyFeatureText">3 Bathroom</p>
                </div>
                <div className = "PropertyFeature">
                    <img className = "PropertyFeatureIcon" src = {border_home_icon}/>
                    <p className = "PropertyFeatureText">140m / -</p>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
