import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import phone_icon from './../static/phone_logo.svg';
import './../App.css';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          ],
    }
  }
  render(){
    return (
        <div className= "Footer">
            <div className = "FooterRow1">
                <p className = "FooterHeader">USEFUL LINKS</p>
                <p className = "FooterContent">Find My Home</p>
                <p className = "FooterContent">Guide to Turkey</p>
                <p className = "FooterContent">Finance & Law</p>
                <p className = "FooterContent">Blog</p>
                <p className = "FooterContent">FAQ</p>
                <p className = "FooterContent">Terms & Conditions</p>
                <p className = "FooterContent">Privacy Policy</p>
            </div>
            <div className = "FooterRow2">
                <p className = "FooterHeader">TURKEY PROPERTIES</p>
                <p className = "FooterContent">Properties for Sale in Turkey</p>
                <p className = "FooterContent">Properties in İstanbul</p>
                <p className = "FooterContent">Properties in İzmir</p>
                <p className = "FooterContent">Properties in Yalova</p>
                <p className = "FooterContent">Properties in Trabzon</p>
                <p className = "FooterContent">Properties in Bodrum</p>
                <p className = "FooterContent">Properties in Fethiye</p>
                <p className = "FooterContent">Properties in Antalya</p>
            </div>
            <div className = "FooterRow3">
                <p className = "FooterHeader">REAL ESTATE PROJECT IN TURKEY</p>
                <p className = "FooterContent">Apartments for Sale in Turkey</p>
                <p className = "FooterContent">Apartments for Sale in Istanbul</p>
                <p className = "FooterContent">Installment Apartments for Sale in Turkey</p>
                <p className = "FooterContent">Installment Apartments for Sale in Istanbul</p>
                <p className = "FooterContent">Villas for sale in Turkey</p>
                <p className = "FooterContent">Villas for Sale in Istanbul</p>
                <p className = "FooterContent">Houses in Turkey</p>
                <p className = "FooterContent">Houses for Sale in Turkey Istanbul</p>
            </div>
            <div className = "FooterRow4">
                <p className = "FooterHeader">CONTACT INFORMATION</p>
                <p className = "FooterContent">Turkey Real Estate <br/>your property, investment <br/>and lifestyle specialist.</p>
                <div className = "FooterContact">
                    <img src = {phone_icon} className = "FooterPhoneLogo"/>
                    <p className = "FooterPhoneNumber">+90 212 293 1512</p>
                </div>
                <p className ="FooterEmail">info@turkeyrealestate.com</p>
                <p className = "FooterAdress">Ritz Carlton Residences <br/>Harbiye Mah. No:9/2107 <br/>34367 Elmadag, Sisli / IST.</p>
            </div>
        </div>
    );
  }
}

export default Footer;
