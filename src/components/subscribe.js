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
      <div class="top-footer row align-items-center">
        <div class="top-footer-left col-lg-6 col-12">
            <div class="subscribe-info">
                <div class="footer-logo">
                    <img src="assets/images/logo.png" alt="" class="img-fluid" />
                </div>

                <div class="subscribe-desc">
                    Subscribe To Our Newsletter
                    <span>to know more about the latest real estate offers</span>
                </div>
            </div>
        </div>

        <div class="top-footer-right col-lg-6 col-12">
            <form action="" class="footer-subscribe-form">
                <div class="input">
                    <div class="placeholder">
                        <div class="icon">
                            <img src="assets/images/icons/email-inside.png" alt="" />
                        </div>
                        <input type="text" placeholder="Your Email Address"/>
                    </div>
                </div>
                <button type="submit">
                    <div class="d-none d-lg-block">
                        SUBSCRIBE <i class="fa fa-caret-right"></i>
                    </div>

                    <d class="d-lg-none">
                        <img src="assets/images/icons/email-inside.png" alt="" />
                    </d>
                </button>
            </form>
        </div>
    </div>
    );
  }
}

export default Subscribe;
