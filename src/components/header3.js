import React from 'react';

import location_logo from './../static/location.svg';
import search_icon from './../static/search_icon.svg';
import facebook_logo from './../static/facebook_logo.svg';
import instagram_logo from './../static/instagram_logo.svg';
import youtube_logo from './../static/youtube_logo.svg';
import twitter_logo from './../static/twitter_logo.svg';
import phone_logo from "./../static/phoneLogo.svg";
import whatsapp_logo from "./../static/whatsapp_logo.svg";
import hearth_icon from "./../static/hearth_icon.svg";
import flag from "./../static/flag.svg"

import axios from 'axios';

import './../App.css';

class Header3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {  
            chosenLan: "USD",
            showTypes: false,
            showPrice: false,
            showAdvanced: false,
            searchLocationResults: [],
        }
    }

    showTypes = () => {
        let show = this.state.showTypes
        this.setState({showTypes: !show})
        console.log(this.state.showTypes)
    }
    showPrice = () => {
        let show = this.state.showPrice
        this.setState({showPrice: !show})
    }
    showAdvanced = () => {
        let show = this.state.showAdvanced
        this.setState({showAdvanced: !show})
    }

    getSearchResults = (event) => {
        var vm = this
        var query = event.target.value.trim()

        console.log('query: "' + query + '"')

        if (query == "") {
            this.setState({ searchLocationResults: [] })
            return
        }

        axios.get("http://138.201.16.232/properties/search-locations/?q="+query)
        .then(res => {
            let results = []

            res.data.results.forEach(district => {
                results.push({
                    repr: district.city_name + ", " + district.name,
                    cityId: district.city_id,
                    id: district.id
                })
            })

            vm.setState({ searchLocationResults: results })
            console.log(results)
        })
    }

  render(){

    const PropertyTypes = () => {
        let output = null 
        if(this.state.showTypes){
            output = (
                <div class="form-opener active">
                    <div class="select">
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa" />
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    Villa
                                </div>
                            </div>
                        </label>

                        <label for="apartment" class="checkbox">
                            <input type="checkbox" name="apartment" id="apartment"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    Apartment
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            )
        }
        return output
    }

    const ShowPrice = () => {
        let output = null
        if(this.state.showPrice){
            output = (
                <div class="form-opener active">
                    <div class="slider">
                        <div class="title">
                            Minimum Price
                        </div>

                        <div class="input">
                            <input type="range" class="min-range" step="10000" value="0" max="1000000"/>

                            <div class="values row">
                                <div class="col-6 text-left">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="min">
                                        0
                                    </span>
                                </div>

                                <div class="col-6 text-right">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="max">5M</span>
                                </div>
                            </div>
                        </div>

                        <div class="title">
                            Maksimum Price
                        </div>

                        <div class="input">
                            <input type="range" class="max-range" step="200000" min="200000" value="200000" max="1000000"/>
                            <div class="values row">
                                <div class="col-6 text-left">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="min">
                                        200000
                                    </span>
                                </div>
                                <div class="col-6 text-right">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="max">5M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return output;
    }

    const showAdvanced = () => {
        let output = null 
        if(this.state.showAdvanced){
            output = (
                <div class="form-opener multiple">
                        <div class="multiple-forms row m-0">
                            <div class="form-block first-input col-lg-6 col-12">
                                <div class="form-group">
                                    <div class="title">
                                        Property Reference
                                    </div>

                                    <div class="input">
                                        <input type="text" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="title align-top mt-2">Property Reference</div>

                                    <div class="input">
                                        <label for="private" class="checkbox">
                                            <input type="checkbox" name="private" id="private" checked />
                                            <div class="checkbox">
                                                <div class="icon">
                                                    <i class="fa fa-check"></i>
                                                </div>

                                                <div class="text">
                                                    Private
                                                </div>
                                            </div>
                                        </label>

                                        <label for="company" class="checkbox">
                                            <input type="checkbox" name="company" id="company" checked />
                                            <div class="checkbox">
                                                <div class="icon">
                                                    <i class="fa fa-check"></i>
                                                </div>

                                                <div class="text">
                                                    Company
                                                </div>
                                            </div>
                                        </label>

                                        <label for="offshore" class="checkbox">
                                            <input type="checkbox" name="offshore" id="offshore" checked />
                                            <div class="checkbox">
                                                <div class="icon">
                                                    <i class="fa fa-check"></i>
                                                </div>

                                                <div class="text">
                                                    Offshore
                                                </div>
                                            </div>
                                        </label>

                                        <label for="developer" class="checkbox">
                                            <input type="checkbox" name="developer" id="developer" checked />
                                            <div class="checkbox">
                                                <div class="icon">
                                                    <i class="fa fa-check"></i>
                                                </div>

                                                <div class="text">
                                                    Developer
                                                </div>
                                            </div>
                                        </label>

                                        <label for="other" class="checkbox">
                                            <input type="checkbox" name="other" id="other" checked />
                                            <div class="checkbox">
                                                <div class="icon">
                                                    <i class="fa fa-check"></i>
                                                </div>

                                                <div class="text">
                                                    Other
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="title">
                                        Property Reference
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="title">
                                        Property Reference
                                    </div>

                                    <div class="input">
                                        <input type="text" placeholder=" Poll, Sea View etc."/>
                                    </div>
                                </div>
                            </div>

                            <div class="form-block col-lg-6 col-12">
                                <div class="form-group select-group">
                                    <div class="title">
                                        Build Size
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        Plot Size
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        <i class="fa fa-lira-sign"></i> / m2 build
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        <i class="fa fa-lira-sign"></i> / m2 plot
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        <i class="fa fa-lira-sign"></i> / m2 plot
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        Bathroom
                                    </div>

                                    <div class="input">
                                        <select>
                                            <option value="#">No Min</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>

                                        <span class="seperator">-</span>

                                        <select>
                                            <option value="#">No Max</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group select-group">
                                    <div class="title">
                                        Property Reference
                                    </div>

                                    <div class="input">
                                        <select class="w-100">
                                            <option value="#">Show highest price fist</option>
                                            <option value="#">100</option>
                                            <option value="#">200</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
        return output
    }

    return (
        <div class="hero-search row">
            <div class="location col-lg-3 col-9 row m-0 align-items-center">
                <div class="input">
                    <div class="icon">
                        <img src={require("./../assets/images/icons/map-marker.png")} alt="" />
                    </div>

                    <input type="text" style={{width: '80%'}} placeholder="Start typing to select a location" onChange={this.getSearchResults}/>
                </div>
            </div>

            <div class="col-lg-9 col-3 row m-0 p-0 align-items-center">
                <div class="form-box col-lg col-12 row m-0 align-items-center" >
                    <div class="form-item" onClick = {() => {this.showTypes()}}>
                        <div class="icon">
                            <img src={require("./../assets/images/icons/home.png")} alt="" />
                        </div>

                        <div class="title">
                            3 Property Types
                        </div>
                        <div class="icon" >
                            <img src={require("./../assets/images/icons/chevron-arrow-down.png" )}alt=""/>
                        </div>
                    </div>
                    {PropertyTypes()}
                </div>

                <div class="form-box col-lg col-12 row m-0 align-items-center">
                    <div class="form-item" onClick = {() => {this.showPrice()}}>
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
                    {ShowPrice()}
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
                            <img src={require("./../assets/images/icons/chevron-arrow-down.png" )}alt="" />
                        </div>
                    </div>
                </div>
                
                {/* <div class="form-box col-lg col-12 row m-0 align-items-center">
                    <div class="form-item" onClick = {() => {this.showAdvanced()}}>
                        <div class="icon">
                            <img src={require("./../assets/images/icons/filter.png")} alt="" />
                        </div>

                        <div class="title">
                            Advanced Filter
                        </div>

                        <div class="icon">
                            <img src={require("./../assets/images/icons/chevron-arrow-down.png")} alt="" />
                        </div>
                    </div>
                    {showAdvanced()}
                </div> */}

                <button class="col-lg-2 col-12">
                    <span>2145</span> <img src={require("./../assets/images/icons/search.png")} class="img-fluid" alt="" />
                </button>

                
            </div>

            {this.state.searchLocationResults.length == 0 ? null : (
                        <div class="search-input-results" style={{marginTop: '100px'}}>
                            {this.state.searchLocationResults.map(res => (
                                <div onClick={() => {window.location = '/List?city='+res.cityId+'&district='+res.id+"&page=1"}}>{res.repr}</div>
                            ))}
                        </div>
                    )}
        </div>
    );
  }
}

export default Header3;
