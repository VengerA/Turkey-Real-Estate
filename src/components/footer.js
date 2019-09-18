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
        <div class="middle-footer row align-items-center d-none d-lg-block">
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col-lg-2 col-12">
                                <nav class="footer-menu">
                                    <div class="footer-title">
                                        USEFUL LINKS
                                    </div>

                                    <ul>
                                        <li><a href="#">Find My Home</a></li>
                                        <li><a href="#">Guide to Turkey</a></li>
                                        <li><a href="#">Finance & Law</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="col-lg-3 col-12">
                                <nav class="footer-menu">
                                    <div class="footer-title">
                                        TURKEY PROPERTIES
                                    </div>

                                    <ul>
                                        <li><a href="#">Properties for Sale in Turkey</a></li>
                                        <li><a href="#">Properties for Sale in İstanbul</a></li>
                                        <li><a href="#">Properties for Sale in İzmir</a></li>
                                        <li><a href="#">Properties for Sale in Yalova</a></li>
                                        <li><a href="#">Properties for Sale in Trabzon</a></li>
                                        <li><a href="#">Properties for Sale in Bodrum</a></li>
                                        <li><a href="#">Properties for Sale in Fethiye</a></li>
                                        <li><a href="#">Properties for Sale in Antalya</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="col-lg-4 col-12">
                                <nav class="footer-menu">
                                    <div class="footer-title">
                                        REAL ESTATE PROJECT IN TURKEY
                                    </div>

                                    <ul>
                                        <li><a href="#">Apartments for Sale in Turkey</a></li>
                                        <li><a href="#">Apartments for Sale in İstanbul</a></li>
                                        <li><a href="#">Installment Apartments for Sale in Turkey</a></li>
                                        <li><a href="#">Installment Apartments for Sale in İstanbul</a></li>
                                        <li><a href="#">Villas for Sale in Turkey</a></li>
                                        <li><a href="#">Villas for Sale in İstanbul</a></li>
                                        <li><a href="#">Houses in Turkey</a></li>
                                        <li><a href="#">Houses for Sale in Turkey İstanbul</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="col-lg-3 col-12">
                                <div class="footer-title">
                                    CONTACT INFORMATION
                                </div>

                                <div class="footer-desc">
                                    Turkey Real Estate your property, investment and lifestyle specialist.
                                </div>

                                <div class="bold-block">
                                    <i class="icon-phone"></i>
                                    +90 212 293 1512
                                </div>

                                <div class="bold-block">
                                    info@turkeyrealestate.com
                                </div>

                                <div class="footer-desc">
                                    Ritz Carlton Residences Harbiye Mah. No:9/2107 34367 Elmadag, Sisli / IST.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}

export default Footer;
