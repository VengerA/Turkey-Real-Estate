import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import './../App.css';

class CityPropertyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
        city: {
            name :"Izmir",
            size: 234
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
  render(){
    const propertyArr = this.state.propertyList.map(item =>{
      let output = null 
      output = ((
        <div className = "PropertyRow">
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
            </div>
            <div className = "PropertyBodyRow3">
              <p className = "PropertySize">{item.m2}</p>
              <p className = "PropertyBedCount">{item.bed_count}</p>
            </div>
          </div>
        </div>
      ))
      return output;
    })

    return (
        <div className= "CityPropertyList">
            <div className = "CityPropertyHeader">
                <p className = "PropertyHeader"><span className = "PropertyHeaderCity">{this.state.city.name}</span> offers {this.state.city.size} properties</p>
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
