import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import './../App.css';

import MainStore from './store';
import axios from 'axios'
import {observer} from 'mobx-react';

import background from './../assets/images/big-city-bg.png';

@observer
class CityInroduction extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      city : null,
      showMail: false,
      showSocial: false
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

  showMail = () => {
    let show = this.state.showMail
    this.setState({showMail: !show})
  }

  showSocial = () => {
    let show = this.state.showSocial
    this.setState({showSocial: !show})
  }

  render(){
    const sendEmail = () => {
      let output = null
      if(this.state.showMail){
        output = (
          <div class="send-mail-area">
            <div class="section-title">
                Inspire new life
            </div>
            
            <input type="text" placeholder="Sender" />

            <input type="text" placeholder="Sender
            Recipient E Mail Address" />

            <button type="submit">Send E Mail / Send</button>
          </div>
        )
      }
      return output
    }

    const showSocial = () => {
      let output = null
      if(this.state.showSocial){
        output = (
          <div class="share-box">
            <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
            </a>

            <a href="#" class="social">
                <i class="fab fa-twitter"></i>
            </a>

            <a href="#" class="social">
                <i class="fab fa-instagram"></i>
            </a>
          </div>
        )
      }
      return output
    }

    return (
      <div id="hero-city" class="row align-items-center" style= {{backgroundImage: `url(${background})`}}>
        <div class="container">
            <div class="row align-items-end">
                <div class="city-info col-lg-8 col-12">
                    <h1 class="city-name">
                        İzmir
                    </h1>

                    <div class="city-details">
                        The Aegean coastal city of Izmir, Turkey's third largest ity, has been home to many ancient civilizations throughout the millenia. Today it gives you the chance to get up close to its archaeological history while offering all the accouterments of a modern, vibrant city.
                    </div>

                    <div class="city-button">
                        <a href="#" class="button">Introducing İzmir</a>
                    </div>
                </div>
                <div class="city-buttons col-lg-4 col-12">
                    <div class="buttons-block">
                        <div class="hearth">
                            <div class="favorite">
                                <div class="row m-0">
                                    <div class="fav-btn">
                                        <span href="" class="favme dashicons dashicons-heart">
                                            <i class="fa fa-heart"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="share" onClick = {() => {this.showSocial()}}>
                            <div class="icon">
                                <img src={require("./../assets/images/icons/share.png")} alt="" />
                            </div>

                            {showSocial()}
                        </div>
                        <div class="email" onClick = {() => {this.showMail()}}>
                          {sendEmail()}
                          <div class="icon">
                              <img src={require("./../assets/images/icons/email-inside.png")} alt="" />
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default CityInroduction;
