import React from 'react';
import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import home_icon from "./../static/cerceveEv_logo.png";
import check_icon from "./../static/check-circle.svg";
import checked_icon from "./../static/checked-circle.svg";
import triangle_icon from './../static/triangle.svg';
import wallet_icon from './../static/wallet2_logo.svg';
import bed_logo from './../static/bed_logo.svg';
import klavye_logo from './../static/klavye_logo.svg';
import './../App.css';
import down_arrow from './../static/down_arrow.svg';

import MainStore from './store.js';
import {observer} from 'mobx-react';
import axios from 'axios';

import cover1 from '../static/antalya.jpg'
import cover2 from '../static/bursa.jpg'
import cover3 from '../static/istanbul.jpg'
import cover4 from '../static/izmi4.jpg'
import cover5 from '../static/ankara.jpg'

const coverImages = [
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
]

@observer
class MainSection extends React.Component{
  constructor(props){
        super(props);
        this.state = {  
            showPropertyTypes: false,
            showPrice: false,
            showAdvanced: false,
            PropertyTypes :[
                {item: "Villa", selected: true},
                {item: "Apartment", selected : true}, 
                {item: "Residance", selected: false},
                {item: "Land", selected: false}, 
                {item: "All Property Types", selected: true} 
            ],
            cityArr : ["Antalya", "Izmir", "Istanbul", "Trabzon", "Bursa"],
            cCity: "Antalya",
            currentImageIndex: 0,
            imageSwitchTimer: undefined,
            cities : []
        }
    }
    componentDidMount() {
        var vm = this
        console.log(MainStore.showProperty)
        this.setState({ imageSwitchTimer: setInterval(() => {
            vm.switchNextImage()
        }, 2000) })
    }

    componentWillMount() {
        this.getCities()
    }

    getCities = () => {
        var vm = this;
        axios.get("http://138.201.16.232/properties/cities/")
        .then(res => {
             MainStore.cities = [
                 ...res.data
                ]
                let _cities = [];
                res.data.forEach(c => {
                    _cities.push(c.name)
                })
                vm.setState({cities: _cities})
             console.log(res)}
             )
    }

    switchNextImage = () => {
        let currentImageIndex = (this.state.currentImageIndex + 1) % coverImages.length
        this.setState({ currentImageIndex, cCity: this.state.cities[currentImageIndex] })
    }

    switchToImageByIndex = (indx) => {
        console.log('switch called with', indx)

        if (indx < 0 || indx >= coverImages.length) {
            console.log("Invalid image index:", indx, ", ( coverImages.length =", coverImages.length, ")")
            return
        }

        var vm = this

        if (this.state.imageSwitchTimer !== undefined) {
            clearInterval(this.state.imageSwitchTimer)
        }

        this.setState({
            currentImageIndex: indx,
            cCity: this.state.cities[indx],
            
            imageSwitchTimer: setInterval(() => {
                vm.switchNextImage()
            }, 2000)
        })
        console.log(this.state.cCity)
    }

    handlePropertyType = (item) => {
        let selected = item.selected 
        item.selected = !selected
    }

    showPropertyType =() =>{
        let show2 = this.state.showPropertyTypes
        this.setState({showPropertyTypes: !show2})
        this.setState({showAdvanced: false})
        this.setState({showPropertyTypes: false})
    } 
    showPrice = () =>{
        let show1 = this.state.showPrice
        console.log(!show1)
        this.setState({showPrice: !show1})
        setTimeout(() => {
            console.log(this.state)
        }, 1000)
        this.setState({showAdvanced: false})
        this.setState({showPrice: false})
    } 

    showAdvanced = () => {
        let show = this.state.showAdvanced
        this.setState({showAdvanced: !show})
        this.setState({showPrice: false})
        this.setState({showPropertyTypes: false})
        setTimeout(() => {
            console.log(this.state)
        }, 1000)
    }

    render(){
        const Price = () => {
            let output = null
            if(this.state.showPrice){
                output = (
                    <div className = "PriceTags">
                        <div className = "PriceTag1">
                            <p className = "PriceTagHeader">Maximum Price</p>
                            <input type="range" className = "RangeInput"></input>
                        </div>
                        <div className = "PriceTag2">
                            <p className = "PriceTagHeader">Maximum Price</p>
                            <input type="range" className = "RangeInput"></input>
                        </div>
                    </div>
                )   
            }
            return output
            
        }
        const PropertyTypes = () => {
            let output = null
            if(this.state.showPropertyTypes){
                output = this.state.PropertyTypes.map(item => {
                    console.log(item.selected);
                    if(!item.selected){
                        return (
                            <button className = "PropertyTag" onClick = {() => {this.handlePropertyType(item)}}>
                                <img className = "checkIcon" src = {check_icon}/>
                                <p className = "PropertyTagText">{item.item}</p>
                            </button>
                        )
                    }
                    else {
                        return (
                            <button className = "PropertyTag" onClick = {() => {this.handlePropertyType(item)}}>
                                <img className = "checkIcon" src = {checked_icon}  />
                                <p className = "PropertyTagText">{item.item}</p>
                            </button>
                        )
                    }
                })
                
            }
            return output
        }

        const PropertyTypesHover = () => {
            let output = null 
            if(this.state.showPropertyTypes){
              output = ((
                  <div className = "PropertyTags">
                      {PropertyTypes()}
                  </div>
              ))
            }
            return output
        }

        const AdvancedFilter = () => {
            let output = null 
            if(this.state.showAdvanced){
                output = (
                    <div className ="AdvancedFilter">
                        <div className = "AdvancedFilterRow1">
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText"> Property Reference</p>
                                <input type = "text" className = "AdvancedInput"/>
                            </div>
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText">Keywords</p>
                                <input type = "text" placeholder = "Poll, Sea, View etc." className = "AdvancedInput"/>
                            </div>
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText">Net m2:</p>
                                <select className = "AdvancedSelector">
                                    <option>OPTION1</option>
                                    <option>OPTION</option>
                                    <option>OPTION</option>
                                    <option>OPTION</option>
                                </select>
                                <select className = "AdvancedSelector">
                                    <option>OPTION</option>
                                    <option>OPTION</option>
                                    <option>OPTION</option>
                                    <option>OPTION</option>
                                </select>
                            </div>
                        </div>
                        <div className = "AdvancedFilterRow2">
                            
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText">Gross m2:</p>
                                <select className = "AdvancedSelector">
                                    <option></option>
                                </select>
                            </div>
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText">Net ₺/m2:</p>
                                <select className = "AdvancedSelector">
                                    <option></option>
                                </select>
                            </div>
                            <div className = "AdvancedContainer1">
                                <p className = "AdvancedFilterText">Sort By:</p>
                                <input type = "text" className = "AdvancedInput" />
                            </div>

                        </div>
                    </div>
                )
            }
            return output;
        }

        return (
            <div> 
                {/* <div className="SliderGallery">
                    <img
                        className="slider-cover-image"
                        src={coverImages[this.state.currentImageIndex]}
                    />
                    <div className = "cityContent">
                        <p className= "cityContentHeader">WIDEN YOUR TURKEY</p>
                        <p className = "cityContentHeader2">{this.state.cCity}</p>
                    </div>
                    <p className = "cityContentText">Antalya's warm climate, beautiful beaches and luxury resorts make it the perfect place to spend a hard-earned break, which is why it’s the first place to spring to mind whenever Turks hear the words "summer holiday." With recent investments in golf courses bringing record numbers of visitors to the area, Antalya has a whole host of things to offer, making it an unbeatable holiday destination.</p>
                    <div className = "CityContentProperities">
                        <a href ="/city" className = "CityContentProperitiesText"><span className = "CityContentProperitiesText1" >234</span> PROPERTIES</a>
                        <div>
                            <img className = "CityContentProperitiesIcon" src ={triangle_icon}/>
                        </div>
                    </div>
                    <div className="slider-imageslider" style={styles.slider}>
                        {MainStore.cities.map((uri, index) =>
                             (
                            <div className = "CitySearchIntroductionHeader">
                                <div
                                    style={this.state.currentImageIndex == index ? styles.sliderItemSelected : styles.sliderItem}
                                    onClick={() => {this.switchToImageByIndex(index)}}
                                    className="slider-imagesilder-item"
                                >
                                    {index + 1}
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div id="hero-placeholder">
                    <div id="hero-slider" class="row">
                        <div class="hero-slider owl-carousel col-12 p-0">
                            <div class="item">
                                <div class="slider-item row m-0 align-items-center" style= {{backgroundImage: `url(${coverImages[this.state.currentImageIndex]})`}}>
                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="slider-details col-lg-8 col-12 p-0">
                                                <div class="slider-header col-12">
                                                    <div class="slider-title">
                                                        WIDEN YOUR TURKEY
                                                        <span>{this.state.cCity}</span>
                                                    </div>

                                                    <div class="slider-buttons">
                                                        <a href="#" class="slider-button">
                                                            <div class="count">
                                                                <span>234</span>
                                                                PROPERTIES
                                                            </div>

                                                            <div class="icon">
                                                                <img src="assets/images/icons/caret-arrow-next.png" alt="" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="slider-desc col-12">
                                                    Antalya's warm climate, beautiful beaches and luxury resorts make it the perfect place to spend a hard-earned break, which is why it’s the first place to spring to mind whenever Turks hear the words "summer holiday." With recent investments in golf courses bringing record numbers of visitors to the area, Antalya has a whole host of things to offer, making it an unbeatable holiday destination.
                                                </div>

                                                <div class="mobile-slider-buttons d-lg-none">
                                                    <a href="#" class="slider-button">
                                                        <div class="count">
                                                            <span>234</span>
                                                            PROPERTIES
                                                        </div>

                                                        <div class="icon">
                                                            <img src="assets/images/icons/caret-arrow-next.png" alt="" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-imageslider" style={styles.slider}>
                        {MainStore.cities.map((uri, index) =>
                             (
                            <div className = "CitySearchIntroductionHeader">
                                <div
                                    style={this.state.currentImageIndex == index ? styles.sliderItemSelected : styles.sliderItem}
                                    onClick={() => {this.switchToImageByIndex(index)}}
                                    className="slider-imagesilder-item"
                                >
                                    {index + 1}
                                    
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div class="hero-search row">
                        <div class="location col-lg-3 col-9 row m-0 align-items-center">
                            <div class="title">Property Turkey for sale</div>
                            <div class="input">
                                <div class="icon">
                                    <img src={require("./../assets/images/icons/map-marker.png")} alt="" />
                                </div>

                                <input type="text" placeholder="Start typing to select a location"></input>
                            </div>
                        </div>

                        <div class="col-lg-8 col-3 row m-0 p-0 align-items-center">
                            <div class="form-box col-lg col-12 row m-0 align-items-center">
                                <div class="form-item">
                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/home.png")} alt="" />
                                    </div>

                                    <div class="title">
                                        3 Properyty Types
                                    </div>
                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-box col-lg col-12 row m-0 align-items-center">
                                <div class="form-item">
                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/wallet.png")} alt="" />
                                    </div>

                                    <div class="title">
                                        Any Price
                                    </div>

                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-box col-lg col-12 row m-0 align-items-center">
                                <div class="form-item">
                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/bedroom.png")} alt="" />
                                    </div>

                                    <div class="title">
                                        All Bedrooms
                                    </div>

                                    <div class="icon">
                                        <img src="./../assets/images/icons/chevron-arrow-down.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-box col-lg col-12 row m-0 align-items-center">
                                <div class="form-item">
                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/filter.png")} alt="" />
                                    </div>

                                    <div class="title">
                                        Advanced Filter
                                    </div>

                                    <div class="icon">
                                        <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <button class="col-lg col-12">
                                <span>2145</span> <img src={require("./../assets/images/icons/search.png")} class="img-fluid" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    slider: {
        position: 'absolute',
        top: '209px',
        right: '50px',
        width : "100px",
        textAlign: 'center',
        height: '191px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sliderItem: {
        fontSize: '18.6px',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '15px',
        marginTop: '15px',
        right: '64px',
    },
    sliderItemSelected: {
        fontSize: '41px',
        color: '#fff',
        fontWeight: 'bold',
        right: '64px',
    }
    
}

export default MainSection;
