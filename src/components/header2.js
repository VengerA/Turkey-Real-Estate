import React from 'react';
import './../App.css';
import SearchHover from "./searchHover";

import { Link } from "react-router-dom";
import {observer} from "mobx-react";

class Header2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      chosenLan: "USD",
      showProperty : false
    }
  }

  showProperty = () => {
    let show = this.state.showProperty
    {this.setState({showProperty: !show})}
  } 

  render(){
    const ShowProperty = () =>{
      if(this.state.showProperty){
        return (
          <div className = "ParentSearchHover">
            <SearchHover/>
          </div>
        )
      }
    } 
    return (
      <div className= "header2">
        <Link className = "header2Help" to = "">
            <p className= "header2HelpText">How Can We Help You ?</p>
        </Link>
        <div className = "Header2navigatorsContainer">
          <button className = "navigators" onClick = {this.showProperty}>
              <p className = "navigatorText">Property</p>
          </button>

          <Link className = "navigators" to = "Guide">
              <p className = "navigatorText">Guide To Turkey</p>
          </Link>
          <Link className = "navigators" to = "Citizienship">
              <p className = "navigatorText">Citizienship</p>
          </Link>
          <Link className = "navigators" to = "#">
              <p className = "navigatorText">Blog</p>
          </Link>
          <Link className = "navigators" to = "AboutUs">
              <p className = "navigatorText">About Us</p>
          </Link>
          <Link className = "navigators" to = "ContactUs">
              <p className = "navigatorText">Contact</p>
          </Link>
        </div>
        {ShowProperty()}
      </div>
    );
  }
}

export default Header2;
