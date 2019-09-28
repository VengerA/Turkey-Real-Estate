import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

import MainStore from './store';
import axios from 'axios';
import {observer} from 'mobx-react'

@observer
class Subscribe extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            mail: ""
        }
    }

    handleMail = (event) => {
        MainStore.mail= event.target.value
        console.log(MainStore.mail)
    }

    sendMail = () => {
        let email = this.state.mail
        axios.post("https://getform.io/f/dce21e9b-bcbf-4561-bdfe-2f4134122604", email)
        .catch(err => console.log(err))
        .then(res => console.log(res))
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
                <form action="https://getform.io/f/dce21e9b-bcbf-4561-bdfe-2f4134122604" method="POST" class="footer-subscribe-form">
                    <div class="input">
                        <div class="placeholder">
                            <div class="icon">
                                <img src={require("./../assets/images/icons/email-inside.png")} alt="" />
                            </div>
                            <input type="email" name = "email" placeholder="Your Email Address" value = {MainStore.mail}  onChange = {this.handleMail}/>
                        </div>
                    </div>
                    <button type="submit">
                        <div class="d-none d-lg-block">
                            SUBSCRIBE <i class="fa fa-caret-right" ></i>
                        </div>
                    </button>
                </form>
            </div>
        </div>
        );
    }
}

export default Subscribe;
