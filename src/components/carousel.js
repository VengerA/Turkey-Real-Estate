import React from 'react';
import { Carousel } from 'react-responsive-carousel';


import './../App.css';

import MainStore from './store'

import {observer }from 'mobx-react'
import axios from 'axios'

@observer
class GuideHover extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        }
    }
    
    render(){
        
        return (
            <Carousel>

            </Carousel>
        );
    }
}

export default GuideHover;
