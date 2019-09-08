import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

class Subscribe extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          ],
    }
  }
  render(){
    return (
        <div className= "Subscribe">
            <div className = "SubscribeRow1">
                <p className = "SubscribeHeader">Subscribe To Our Newsletter</p>
                <p className = "SubscribeContent">to know more about the latest real estate offers</p>
            </div>
            <div className = "SubscribeRow2">
                <input className = "SubscribeInput" type = "email" placeholder = "Email"/>
            </div>
            <div className = "SubscribeRow3">
                <a className = "SubscribeButton"><p>SUBSCRIBE</p></a>
            </div>
        </div>
    );
  }
}

export default Subscribe;
