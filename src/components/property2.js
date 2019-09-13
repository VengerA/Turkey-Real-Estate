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
        imgArr : [{item1:1},{tem2:2},{item3:3},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4},{item:4}]
    }
  }
  render(){
    const FeatureArr = this.state.imgArr.map( item => {
      let output = null
      output = (
        <div className = "Property2Feature">
          <img className ="Propert2FeatureHeader" src = {bed_icon}/>
          <p className ="Propert2FeatureContent">Cafe & Restaurants</p>
        </div>
      )
      return output;
    })
        
    return (
        <div className = "Property2">
          <p className = "Property2Header">Comfort of Residence in Central Istanbul</p>
          <p className = "Property2Content">Ortayaka Residences is located in Eyüp, which is one of the most historical places in Istanbul, also a famous area that attracts the tourists from all over the world, while its central location allows access to the whole city by many public transportation services available. The mixture of the old and the new, the past and the future is breathtaking.<br/><br/>Ortayaka Residences attracts attention to its location due to it being close to the Haliç Bridge that connects the highway to the Bosphorus Bridge to cross between the two continents and Vialand which is one of the most famous theme parks in Istanbul.</p>
          <p className = "Property2Header2">Amenities</p>
          <div className = "Property2Features">
            {FeatureArr}
          </div>
        </div>
    );
  }
}

export default App;
