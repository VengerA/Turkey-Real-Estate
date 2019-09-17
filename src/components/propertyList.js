import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import global_logo from './../static/global_logo.svg'
import cerceve_ev from './../static/cerceveEv_logo.png';
import bed_logo from './../static/bed_logo.svg';
import './../App.css';
import MainStore from './store'
import axios from 'axios';

class CityPropertyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
        city: {
        },
        propertyList: [
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
          {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 }
        ]
    }
  }

  componentWillMount() {

  }

  takePropertyList = () =>{
    axios.get("http://138.201.16.232/properties/search/?city=" + MainStore.clickedCityID)
    .then(res => {
      this.state.city = res.data
    })
  }

  render(){
    const propertyArr = this.state.propertyList.map(item =>{
      let output = null 
      output = ((
        <a className = "PropertyRow" href = "/property">
          <div className = "PropertyHead" style = {{backgroundImage : "http://167.99.131.163/media/static/uploads/properties/bac9dc3a6caa4c12a504e40dcf090a08.jpg"}}>
            <p className = "PropertyType">{item.type}</p>
          </div>
          <div className = "PropertyBody">
          <div className = "PropertyBodyRow1">
            <p className = "PropertyLocation">{item.location}</p>
            <p className = 'PropertyDescription'>{item.shortDescription}</p>
          </div>
            <div className = "PropertyBodyRow2">
              <p className = "PropertyCost">$ {item.cost}</p>
              <img src = {global_logo} className = "GlobalLogo"/>
            </div>
            <div className = "PropertyBodyRow3">
              <img src = {cerceve_ev} className ="CerceveEvLogo"/>
              <p className = "PropertySize">{item.m2}</p>
              <img src = {bed_logo} className = "bedLogo"/>
              <p className = "PropertyBedCount">{item.bed_count}</p>
            </div>
          </div>
        </a>
      ))
      return output;
    })

    return (
        <div className= "CityPropertyList">
            <div className = "CityPropertyHeader">
                <p className = "PropertyHeader"><span className = "PropertyHeaderCity">Izmir</span> offers {this.state.city.size} properties</p>
                <select className = "PropertyButton">
                  <option value="newest">Show Newest First</option>
                  <option value="expensive">Show Most Expensive First</option>
                  <option value="editorsChoice">Show Editor`s Choice First</option>  
                </select> 
                <hr className = "PropertyHr"/>
            </div>
            <div className = "PropertyContainer">
              {propertyArr}
            </div>
        </div>
    );
  }
}

export default CityPropertyList;
