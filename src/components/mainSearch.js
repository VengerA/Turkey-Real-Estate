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

import MainStore from './store.js';
import {observer} from 'mobx-react';

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
            currentImageIndex: 0,
            imageSwitchTimer: undefined
        }
    }
    componentDidMount() {
        var vm = this
        console.log(MainStore.showProperty)
        this.setState({ imageSwitchTimer: setInterval(() => {
            vm.switchNextImage()
        }, 2000) })
    }

    switchNextImage = () => {
        let currentImageIndex = (this.state.currentImageIndex + 1) % coverImages.length
        this.setState({ currentImageIndex })
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
            imageSwitchTimer: setInterval(() => {
                vm.switchNextImage()
            }, 2000)
        })
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
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
                                </select>
                                <select className = "AdvancedSelector">
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
                                    <option>ASDASD</option>
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
            <div className= "MainSearch">
                <div className = "cityContent">
                    <p className= "cityContentHeader">WIDEN YOUR TURKEY</p>
                    <p className = "cityContentHeader2">Antalya</p>
                </div>
                <p className = "cityContentText">Antalya's warm climate, beautiful beaches and luxury resorts make it the perfect place to spend a hard-earned break, which is why it’s the first place to spring to mind whenever Turks hear the words "summer holiday." With recent investments in golf courses bringing record numbers of visitors to the area, Antalya has a whole host of things to offer, making it an unbeatable holiday destination.</p>
                <div className = "CityContentProperities">
                    <p className = "CityContentProperitiesText"><span className = "CityContentProperitiesText1" >234</span> PROPERTIES</p>
                    <div>
                        <img className = "CityContentProperitiesIcon" src ={triangle_icon}/>
                    </div>
                </div>
                <div>
                    <div className = "searchContainer">
                        <p className = "Container1Text">Property Turkey For Sale</p>
                        <div className = 'searchInput'>
                            <img className= "locationLogo" src = {location_logo}/>
                            <input className = "locationInput" type="text" value = "Start typing to select a location"/>
                        </div>
                    </div>
                    <div className = "searchOptions2">
                        <div className = "searchOptions" onClick = {this.showPropertyType}>
                            <img src = {home_icon} className = "MainSearchIcons" />
                            <p className ="searchOptionText">3 Property Types</p>
                        </div>
                        <div className = "searchOptions" onClick = {() => this.showPrice()}>
                            <img src = {wallet_icon} className = "MainSearchIcons" />
                            <p className ="searchOptionText">Any Price</p>
                        </div>
                        <div className = "searchOptions">
                            <img src = {bed_logo} className = "MainSearchIcons" />
                            <p className ="searchOptionText">All Bed Rooms</p>
                        </div>
                        <div className = "searchOptions" onClick = {() =>this.showAdvanced()}>
                            <img src = {klavye_logo} className = "MainSearchIcons" />
                            <p className ="searchOptionText">Advanced Filter</p>
                        </div>
                    </div>
                    <div className = "searchBox" >
                        <p className = "searchBoxText">2145</p>
                        <img className = "searchIcon" src = {search_icon}/>
                    </div>
                </div>
                <div className="SliderGallery">
                    <img
                        className="slider-cover-image"
                        src={coverImages[this.state.currentImageIndex]}
                    />
                    <div className="slider-imageslider" style={styles.slider}>
                        {coverImages.map((uri, index) => (
                            <div
                                style={this.state.currentImageIndex == index ? styles.sliderItemSelected : styles.sliderItem}
                                onClick={() => {this.switchToImageByIndex(index)}}
                                className="slider-imagesilder-item"
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
                {PropertyTypesHover()}
                {Price()}
                {AdvancedFilter()}
            </div>
        );
    }
}

const styles = {
    slider: {
        position: 'absolute',
        top: '209px',
        right: '64px',
        width: '139px',
        textAlign: 'center',
        height: '191px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        scrollbarColor: 'white rgba(255, 255, 255, 0.4)',
        scrollbarWidth: 'thin'
    },
    sliderItem: {
        fontSize: '18.6px',
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: '15px',
        marginTop: '15px'
    },
    sliderItemSelected: {
        fontSize: '41px',
        color: '#fff',
        fontWeight: 'bold'
    }
}

export default MainSection;
