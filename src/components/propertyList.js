import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import global_logo from './../static/global_logo.svg'
import cerceve_ev from './../static/cerceveEv_logo.png';
import bed_logo from './../static/bed_logo.svg';
import './../App.css';
import MainStore from './store'
import axios from 'axios';
import {observer } from 'mobx-react';


//SAZAK ASAGIDAKI TAKEPROPERTY LISTI DUZELTIRSEN DIREK RENDER DUZELIYOR SADECE PAGING EKLEMEDIM KANKA ONU GOREMEDIM SENIN DOCS DA ONU EKLEYINCE CLICK EVENT EKLEMEN LAZIM ONU DA YINE AYNI SEKILDE SADECE PROPERTY LIST FONKSIYONUNU YAZSAN YETERLI OLUCAK KANKA CLICK EVENT DE TEKRARDAN CAGIRMAN LAZIM O KAFA
// KANKA BIR DE BACKEND DEN FOTOGRAFLAR VAR MI YOK MU EMIN OLAMADIM O SEBEP ILE BACKEND DEN FOTOGRAFLAR GELICEGI ZAMAN DYNAMIC URL VERMEN GEREKICEK PROPERTYLERIN HEAD KISMINA

@observer
class CityPropertyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
        city: {
        },
    }
  }

  componentWillMount () {
    // SAZAK TAKE PROPERTY LIST FONKSIYONU CLAISTIKTAN SONRA ASAGIADKI KODU DUZELTIRSEN KANKA DIREK ACILISTA ALICAK DATAYI SONRASINDA MAINSTORE ATICAK O DA ACILDIGINDA 1 KERE RENDER EDICEK TEMIIIIZZZ
    // this.takePropertyList()
  }

  takePropertyList = () =>{
    // SAZAK BURDA NE GELMESI LAZIM GOREMEDIM FAKAT PROPERTY LIST I ALMAYI AMACLIYORUM BURADA 
    // BURDAKI RES.DATA YI ALMAK PROPERTY LISTI ALIP MAINSTORE A ATMAK ICIN 
    // BURADA CITY ID DE STORE DAN ALINIYOR ONCEKI SAYFADA CLICK EVENT E GORE ID YI MAINSTORE A ATMAYI PLANLAMISTIM FARKLI BIR SEKILDE DE OLABILIR SANA BIRAKIORUM O KISMI
    axios.get("http://138.201.16.232/properties/search/?city=" + MainStore.clickedCity)
    .then(res => {
      MainStore.propertyList = res.data
      console.log(MainStore.propertyList)
    })
  }

  render(){
    const propertyArr = MainStore.propertyList.map(item =>{
      let output = null 
      output = ((
        <div class="listing-block col-lg-4 col-md-6 col-12">
          <div class="listing-item">
              <figure class="listing-image">
                  <a href="#i">
                      <img src={require("./../assets/images/mockup-1.png")} class="img-fluid" alt="" />
                  </a>
                  <a href="#cat" class="category">LUXURY VILLA</a>
                  <span class="editor">EDITOR CHOICE</span>
                  <div class="favorite">
                      <div class="row m-0">
                          <div class="fav-btn">
                              <span href="" class="favme dashicons dashicons-heart">
                                  <i class="fa fa-heart"></i>
                              </span>
                          </div>
                      </div>
                  </div>
              </figure>
              <div class="listing-details">
                  <div class="listing-header">
                      <div class="location">Izmir/Çeşme</div>
                      <div class="name">
                          <a href="#">Luxury Villa in Çeşme with private beach</a>
                      </div>
                  </div>

                  <div class="listing-body row align-items-center">
                      <div class="price col-6">
                          $ 1.200.000
                      </div>

                      <div class="globe col-6">
                          <img src={require("./../assets/images/icons/passport-icon.png")} alt="" />
                      </div>
                  </div>

                  <div class="listing-footer row align-items-center">
                      <div class="area col-8">
                          <img src={require("./../assets/images/icons/home-area.png")} alt="" />
                          140 m<sup>2</sup> / 550 m<sup>2</sup>
                      </div>

                      <div class="beds col-4">
                          <img src={require("./../assets/images/icons/bed-for-listing.png")} alt="" />
                          4
                      </div>
                  </div>
              </div>
          </div>
        </div>
      ))
      return output;
    })

    return (
      <div id="city-listing">
      <header id="listing-header" class="row align-items-center">
          <div class="container">
              <div class="row align-items-center">
                  <div class="listing-info col-lg-6 col-12">
                      <span>Izmir</span> offers 234 properties
                  </div>
                  <div class="listing-buttons col-lg-6 col-12">
                      <a href="#" class="change-view">Map View</a>

                      <select name="" id="">
                          <option value="#">Show New First</option>
                          <option value="#">Show Latest First</option>
                          <option value="#">Show Cheapest First</option>
                          <option value="#">Show Cheapest Last</option>
                      </select>
                  </div>
              </div>
          </div>
      </header>
      <div class="city-lists">
          <div id="list-view" class="row">
              <div class="container">
                  <div class="row">
                      <div class="listing col-12 row">
                        {propertyArr}
                          <div class="system_pagination row align-items-center col-12">
                                        <a href="#" class="arrow prev">
                                            <img src={require("./../assets/images/icons/arrow-chevron-prev.png")} alt="" />
                                        </a>

                                        <div class="numbers">
                                            <a href="#" class="button">1</a>
                                            <a href="#" class="button">2</a>
                                            <a href="#" class="button active">3</a>
                                            <a href="#" class="button">4</a>
                                            <a href="#" class="button">5</a>
                                            <a href="#" class="button">...</a>
                                            <a href="#" class="button">20</a>
                                        </div>

                                        <a href="#" class="arrow next">
                                            <img src={require("./../assets/images/icons/arrow-chevron-next.png")} alt="" />
                                        </a>
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

export default CityPropertyList;
