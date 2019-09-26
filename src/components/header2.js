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
      <div class="middle-header row align-items-center">
        <div class="container-fluid">
            <div class="row m-0 align-items-center">
                <div class="col-lg-3 col-12">
                    <a href="#" class="help-button">
                        How we can help you?
                    </a>
                </div>

                <div class="col-lg-9 col-12">
                    <nav class="header-menu">
                        <ul>
                            <li><a href="#">Property</a></li>
                            <li><a href="#">Find My Home</a></li>
                            <li><a href="/Guide">Guide To Turkey</a></li>
                            <li><a href="/Guide">Finance & Law</a></li>
                            <li><a href="/citizenship">Citizenship</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="/AboutUs">About Us</a></li>
                            <li><a href="/ContactUs">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Header2;
