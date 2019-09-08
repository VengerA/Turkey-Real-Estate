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
        }
    }
  }
  render(){
    return (
        <div className= "CityPropertyList">
            <div className = "CityPropertyHeader">
                <p>{this.state.city.name} offers {this.state.city.size} properties</p>
            </div>
        </div>
    );
  }
}

export default CityPropertyList;
