import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import './../App.css';

import MainStore from './store';
import axios from 'axios'
import {observer} from 'mobx-react';

@observer
class CityInroduction extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      city : null
    }
  }

  componentWillMount(){
    this.getCity()
  }

  getCity = () => {
    axios.get("http://138.201.16.232/properties/search/?city=" + MainStore.clickedCity)
    .then(res => {
      this.state.city = res.data
      console.log(res)
    })
  }
  render(){
    return (
        <div className= "Introduction">
          <div className = "IntroductionContainer">
            <p className = "IntroductionHeader2">Izmir</p>
            <p className = "IntroductionText">Izmir's warm climate, beautiful beaches and luxury resorts make it the perfect place to spend a hard-earned break, which is why it’s the first place to spring to mind whenever Turks hear the words "summer holiday." With recent investments in golf courses bringing record numbers of visitors to the area, Antalya has a whole host of things to offer, making it an unbeatable holiday destination.</p>
            <button className = "IntroductionButton">Introducing Izmir</button>
          </div>
         </div>
    );
  }
}

export default CityInroduction;
