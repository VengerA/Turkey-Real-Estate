import React from 'react';


import './../App.css';

import {observer} from 'mobx-react';

import MainStore from './store';

@observer
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {  
        showCurrency : false,
        isFirst: false 
        }
    }

    showCurrency = () => {
    let current = this.state.showCurrency 
    this.setState({showCurrency : !current})
    } 

    changeToDollar = (id) => {
        console.log(id)
        console.log(this.state.isFirst)
        if(!this.state.isFirst){
            this.setState({isFirst: true})
        }
        else {
            if(id === 1){
                MainStore.showDollar =true
                MainStore.showTukishLira= false
                MainStore.showEuro= false
                this.setState({isFirst: false})
                MainStore.currentCurrency = "USD"
                localStorage.setItem("currency", "USD")
            }
            else if(id === 2){
                MainStore.showDollar = false
                MainStore.showTukishLira= true
                MainStore.showEuro= false
                this.setState({isFirst: false})
                MainStore.currentCurrency = "TRY"
                localStorage.setItem("currency", "TRY")
            }
            else {
                MainStore.showDollar = false
                MainStore.showTukishLira= false
                MainStore.showEuro= true
                this.setState({isFirst: false})
                MainStore.currentCurrency = "EUR"
                localStorage.setItem("currency", "EUR")
            }
        }
    }
    
    // sendActivate = (id) => {
    //     let output = null
    //     if(id === 1){
    //         if(this.state.showDollar){
    //             output = "choice activate"
    //         }
    //         return output
    //     }
    //     else if(id === 2){
    //         if(this.state.showTukishLira){
    //             output = "choice activate"
    //             console.log(output)
    //         }
    //         return output
    //     }
    //     else {
    //         if(this.state.showEuro){
    //             output = "choice activate"
    //         }
    //         return output
    //     }
    // }

  render(){
    const showCurrency = () => {
        let output = null
        if(this.state.isFirst){
            output  =((
                <div class="select">
                    <div class= "choice active" onClick ={() => this.changeToDollar(1)}  data-value="$ USD">
                        <span class="currency" >
                            $
                        </span>
                        <span class="name" onClick ={() => this.changeToDollar(3)}>Dolar</span>
                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                    </div>

                    <div class="choice active" onClick ={() => this.changeToDollar(2)}  data-value='₺ TRY'>
                        <span class="currency">
                            ₺
                        </span>
                        <span class="name" onClick ={() => this.changeToDollar(3)}>TRY</span>
                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                    </div>
                    <div class="choice active"   data-value='£ EURO'>
                        <span class="currency">
                            £
                        </span>
                        <span  class="name" onClick ={() => this.changeToDollar(3)}>EURO</span>
                        <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                    </div>
                </div>
            ))
        }
        else{
            if(MainStore.showDollar){
                output = ((
                    <div class="select">
                        <div class= "choice active" onClick ={() => this.changeToDollar()}  data-value="$ USD">
                            <span class="currency" >
                                $
                            </span>
                            <span class="name">Dolar</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                    </div>
                ))
            }
            else if(MainStore.showTukishLira){
                output = ((
                    <div class="select">
                         <div class="choice active" onClick ={() => this.changeToDollar()}  data-value='₺ TRY'>
                            <span class="currency">
                                ₺
                            </span>
                            <span class="name">TRY</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                    </div>
                ))
            }
            else if(MainStore.showEuro) {
                output = ((
                    <div class="select">
                        <div class="choice active" onClick ={() => this.changeToDollar()}  data-value='£ EURO'>
                            <span class="currency">
                                £
                            </span>
                            <span class="name">EURO</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                    </div>
                ))
            }
        }
        return output
    }
    const changeLanCur = () => {
        let output = null 
        if(this.state.showCurrency){
            output = (
            <div class="landc-box">
                <div class="form-group language-group">
                    <label class="title">Choose Language</label>

                    <div class="select">
                        <div class="choice active" data-flag={require("./../assets/images/icons/flags/english.png")}>
                            <span class="icon">
                                <img src={require("./../assets/images/icons/flags/english.png")}alt="" />
                            </span>
                            <span class="name">English</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                        <div class="choice" data-flag={require("./../assets/images/icons/flags/turkish.png")}>
                            <span class="icon">
                                <img src={require("./../assets/images/icons/flags/turkish.png")} alt="" />
                            </span>
                            <span class="name">Turkish</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                        <div class="choice" data-flag="assets/images/icons/flags/dutch.png">
                            <span class="icon">
                                <img src="assets/images/icons/flags/dutch.png" alt="" />
                            </span>
                            <span class="name">Deutch</span>
                            <span class="arrow"><i class="fa fa-chevron-down"></i></span>
                        </div>
                    </div>
                </div>

                <div class="form-group currency-group">
                    <label class="title">Choose Currency</label>
                    {showCurrency()}
                   
                </div>
                {/* <div class="form-group">
                    <button type="submit">CHANGE</button>
                </div> */}
            </div>
            )
        }
        return output
    }
    return (
      <div class="top-header row align-items-center" href ="./home">
            <div class="container-fluid">
                <div class="row align-items-center m-0">
                    <div class="col-lg-3 col-12">
                        <div class="logo">
                            <a href="/">
                                <img src={require("./../assets/images/logo.png")} class="img-fluid" alt="" /> TURKEY REALESTATE
                            </a>
                        </div>
                    </div>
                    
                    <div class="col-lg-2 col-12">
                        <div class="social-icons">
                            <a href="#" class="social"><i class="icon-facebook"></i></a>
                            <a href="#" class="social"><i class="icon-twitter"></i></a>
                            <a href="#" class="social"><i class="icon-instagram"></i></a>
                            <a href="#" class="social"><i class="icon-youtube"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-7 col-12">
                        <div class="header-buttons">
                            <div class="phone">
                                <a href="#">
                                    <span class="icon"><i class="icon-phone"></i></span>
                                    International Calls
                                    <span>+90 212 293 1512</span>
                                </a>
                            </div>

                            <div class="whatsapp">
                                <a href="#" class="button">
                                    <i class="icon-whatsapp"></i>
                                </a>
                            </div>

                            <div class="buttons lac-buttons" >
                                <div class="placeholder" onClick = {() => {this.showCurrency()}}>
                                    <div class="current-language">
                                        <img src= {require("./../assets/images/icons/flags/english.png")} alt=""></img>
                                    </div>

                                    <span class="current-currency">
                                       {MainStore.currentCurrency} 
                                    </span>

                                    <span class="icon">
                                        <i class="fa fa-chevron-down"></i>
                                    </span>
                                </div>
                                {changeLanCur()}
                            </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
