import React from 'react';


import MainStore from './store';
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
            showBedroom: false,
            searchLocationResults: [],
            selectedCityID: undefined,
            selectedDistrictID: undefined,
            selectedPlaceholder: undefined,
            __searchbarinput: '',
            MinPrice : 0,
            MaxPrice : 20000000000
        }
    }

    showTypes = () => {
        let show = this.state.showTypes
        this.setState({showTypes: !show})
        this.setState({showPrice: false})
        this.setState({showAdvanced: false})
        this.setState({showBedroom: false})
    }
    showPrice = () => {
        let show = this.state.showPrice
        this.setState({showPrice: !show})
        this.setState({showAdvanced: false})
        this.setState({showTypes: false})
        this.setState({showBedroom: false})
    }
    showAdvanced = () => {
        let show = this.state.showAdvanced
        this.setState({showAdvanced: !show})
        this.setState({showPrice: false})
        this.setState({showTypes: false})
    }

    showBedroom = () => {
        let show = this.state.showBedroom
        this.setState({showBedroom: !show})
        this.setState({showPrice: false})
        this.setState({showTypes: false})
    }

    componentWillMount(){
        this.getCities()
    }

    getCities = () => {
        var vm = this;
        axios.get("http://138.201.16.232/properties/cities/")
        .then(res => {
            MainStore.cities = [
                ...res.data
            ]
            
            vm.setState({cities: res.data})
        })
    }

    constructLocationObjectArray = () => {
        let results = []

        if (this.state.cities === undefined)
            return []

        this.state.cities.forEach(city => {
            city.districts.forEach(district => {
                results.push({
                    repr: city.name + ", " + district[1],
                    cityId: city.id,
                    id: district[0]
                })
            })
        })

        return results
    }

    getSearchResults = (event) => {
        var vm = this
        var query = event.target.value.trim()
        this.setState({__searchbarinput :event.target.value})

        if (query == "") {
            this.setState({ searchLocationResults: this.constructLocationObjectArray() })
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
        })
    }

    updateSearchResults = (event) => {
        var query = event.target.value.trim()

        if (query == "") {
            this.setState({ searchLocationResults: this.constructLocationObjectArray() })
        } else {
            this.getSearchResults(event)
        }
    }

    clearSearchResults = () => {
        this.setState({ searchLocationResults: [] })
    }

    updateSelectedLocation = (cid, did, ph) => {

        this.setState({
            selectedCityID: cid,
            selectedDistrictID: did,
            selectedPlaceholder: ph,
            __searchbarinput: ''
        })

        this.clearSearchResults()
    }


    onSearchHandler = () => {
        if (this.state.selectedCityID !== undefined) {
            if (this.state.selectedDistrictID !== undefined) {
                window.location = '/List?city='+this.state.selectedCityID+'&district='+this.state.selectedDistrictID+'&page=1'  + "&priceMin=" +this.state.MinPrice + "&priceMax=" + this.state.MaxPrice
            } else {
                window.location = '/City?city='+this.state.selectedCityID+'&page=1'  + "&priceMin=" +this.state.MinPrice + "&priceMax=" + this.state.MaxPrice
            }
        }
    }

    updateMinPrice = (input) => {
        console.log(input.target.value)
        if(input.target.value >= this.state.MaxPrice){
            this.setState({MinPrice: Number(input.target.value)})
            this.setState({MaxPrice : Number(input.target.value)})
        }
        else {
            this.setState({MinPrice: Number(input.target.value)})
        }
        
    }
    updateMaxPrice = (input) => {
        if(input.target.value <= this.state.MinPrice){
            this.setState({MinPrice : Number(input.target.value)})
            this.setState({MaxPrice: Number(input.target.value)})
        }
        else {
            this.setState({MaxPrice: Number(input.target.value)})
        }
       
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
            let min = 2000000
            
            output = (
                <div class="form-opener active">
                    <div class="slider">
                        <div class="title">
                            Minimum Price
                        </div>

                        <div class="input">
                            <input type="range" class="min-range" step="50000" value={this.state.MinPrice} min = "0" max="20000000" onChange = {(data) => this.updateMinPrice(data)} />

                            <div class="values row">
                                <div class="col-6 text-left">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="min">
                                        {this.state.MinPrice.toLocaleString()}
                                    </span>
                                </div>

                                <div class="col-6 text-right">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="max">20M</span>
                                </div>
                            </div>
                        </div>

                        <div class="title">
                            Maksimum Price
                        </div>

                        <div class="input">
                            <input type="range" class="max-range" step="50000" value = {this.state.MaxPrice} min="200000" value={this.state.MaxPrice} max="20000000" onChange = {(data) => this.updateMaxPrice(data)} />

                            <div class="values row">
                                <div class="col-6 text-left">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="min">
                                        {min.toLocaleString()}
                                    </span>
                                </div>

                                <div class="col-6 text-right">
                                    <i class="fa fa-lira-sign"></i>
                                    <span class="max">{this.state.MaxPrice.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return output;
    }

    const BedroomTypes = () => {
        let output = null
        if(this.state.showBedroom){
            output = (
                <div class="form-opener">
                    <div class="select">
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    1 Bedroom
                                </div>
                            </div>
                        </label>
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    2 Bedroom
                                </div>
                            </div>
                        </label>
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    3 Bedroom
                                </div>
                            </div>
                        </label>
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    4 Bedroom
                                </div>
                            </div>
                        </label>
                        <label for="villa" class="checkbox">
                            <input type="checkbox" name="villa" id="villa"/>
                            <div class="checkbox">
                                <div class="icon">
                                    <i class="fa fa-check"></i>
                                </div>

                                <div class="text">
                                    5+ Bedroom
                                </div>
                            </div>
                        </label>

                    </div>
                </div>
            )
        }
        return output
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

                    <input style={{width: '80%'}} placeholder="Start typing to select a location" value={this.state.__searchbarinput} type="text" placeholder={this.state.selectedPlaceholder === undefined ? "Start typing to select a location" : this.state.selectedPlaceholder} onChange={this.getSearchResults} onFocus={this.updateSearchResults}/>
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
                    <div class="form-item" onClick = {() => {this.showBedroom()}}>
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
                    {BedroomTypes()}
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

                <button class="col-lg-2 col-12" onClick = {this.onSearchHandler}>
                    <img src={require("./../assets/images/icons/search.png")} class="img-fluid" alt="" />
                </button>

                
            </div>

            {this.state.searchLocationResults.length == 0 ? null : (
                        <div class="search-input-results" style={{marginTop: '100px'}}>
                            {this.state.searchLocationResults.map(res => (
                                <div onClick={this.updateSelectedLocation.bind(this, res.cityId, res.id, res.repr)}>{res.repr}</div>
                            ))}
                        </div>
                    )}
        </div>
    );
  }
}

export default Header3;
