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

function _get_array(s, e) {
    let arr = []

    for (let i = s; i <= e; i++)
        arr.push(i)

    return arr
}

@observer
class CityPropertyList extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
        resultSortMethod: undefined,
    }
  }

  componentWillMount () {
    
    this.takePropertyList()
  }

  takePropertyList = () =>{
    
    if (this.props.cityId === undefined) {
        console.log("[!] CityID:", this.props.cityId, "DistrictID:", this.props.districtId)
        return
    }

    if (MainStore.searchedCity === undefined || MainStore.searchedCity.id != Number(this.props.cityId)) {
        axios.get("http://138.201.16.232/properties/cities/"+this.props.cityId+"/")
            .then(res => {
                MainStore.searchedCity = res.data
            })
    }

    let query = "?city=" + this.props.cityId

    if (this.props.pageNumber !== undefined) {
        query += "&page=" + this.props.pageNumber
    }

    query += '&dateSorting=desc'

    axios.get("http://138.201.16.232/properties/search/"+query)
        .then(res => {
            MainStore.searchResults = res.data.results
            MainStore.searchResultCount = res.data.count
        })
  }

  updateSorting = (e) => {
    this.setState({resultSortMethod: e.target.value})
  }

  updatePropertyListOnSortingChange = (tag) => {
    let query = "?city=" + this.props.cityId

    if (this.props.districtId !== undefined) {
        query += "&district=" + this.props.districtId
    } 

    if (this.props.pageNumber !== undefined) {
        query += "&page=" + this.props.pageNumber
    }

    if (tag == 'new')
        query += '&dateSorting=desc'
    else if (tag == 'new_last')
        query += '&dateSorting=asc'
    else if (tag == 'cheap')
        query += '&priceSorting=asc'
    else if (tag == 'exp')
        query += '&priceSorting=desc'
    else
        return

    MainStore.searchResultCount = 0
    MainStore.searchResults = []

    axios.get("http://138.201.16.232/properties/search/"+query)
        .then(res => {
            MainStore.searchResults = res.data.results
            MainStore.searchResultCount = res.data.count
        })
  }

  goPrevious = () => {
    if (this.props.pageNumber === undefined)
        return
    
    if (Number(this.props.pageNumber) > 1)
        window.location = "/City?city=" + this.props.cityId + "&page=" + (Number(this.props.pageNumber) - 1)
  }

  goNext = () => {
    if (this.props.pageNumber === undefined)
        window.location = "/City?city=" + this.props.cityId + "&page=2"

    if (Number(this.props.pageNumber) > 1)
        window.location = "/City?city=" + this.props.cityId + "&page=" + (Number(this.props.pageNumber) + 1)
  }

  createPaginatorArrows = () => {
    let arrows = []

    if (MainStore.searchResultCount === undefined)
        return arrows
    
    let numPages = (MainStore.searchResultCount / 20) + 1
    let currentPage = Number(this.props.pageNumber)

    if (numPages <= 5) {
        for (let i = 1; i <= numPages; i++)
            arrows.push((<a
                href={"/city?city="+this.props.cityId+"&page="+i}
                class={currentPage == i ? "button active" : "button"}
            >{i}</a>))
    } else {
        if (currentPage >= numPages) {
            _get_array(currentPage - 3, currentPage).forEach(i => {
                arrows.push((<a
                    href={"/city?city="+this.props.cityId+"&page="+i}
                    class={currentPage == i ? "button active" : "button"}
                >{i}</a>))
            })
        } else if (currentPage <= 1) {
            _get_array(currentPage, currentPage + 3).forEach(i => {
                arrows.push((<a
                    href={"/city?city="+this.props.cityId+"&page="+i}
                    class={currentPage == i ? "button active" : "button"}
                >{i}</a>))
            })
        } else {
            _get_array(currentPage - 1, currentPage + 1).forEach(i => {
                arrows.push((<a
                    href={"/city?city="+this.props.cityId+"&page="+i}
                    class={currentPage == i ? "button active" : "button"}
                >{i}</a>))
            })
        }
    }
    
    return arrows
  }  

  render(){
    const propertyArr = MainStore.searchResults.map(item =>{
      let output = null 
      output = ((
        <div class="listing-block col-lg-4 col-md-6 col-12">
          <div class="listing-item">
              <figure class="listing-image">
                  <a href={'/property?pid='+item.id}>
                      <img src={item.cover_image} class="img-fluid" alt="" />
                  </a>
                  <a href="#cat" class="category">LUXURY VILLA</a>
                  {item.is_editor_choice ? (
                      <span class="editor">EDITOR CHOICE</span>
                  ) : null}
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
                      <div class="location">{item.district_name}/{item.subdistrict_name}</div>
                      <div class="name">
                          <a href={'/property?pid='+item.id}>{item.bed_count} Bedroom {item.project_area} m<sup>2</sup> Apartment in {item.district_name}</a>
                      </div>
                  </div>

                  <div class="listing-body row align-items-center">
                      <div class="price col-6">
                        {item.price_start.toLocaleString()} TRY
                      </div>

                      <div class="globe col-6">
                          {item.is_citizenship_friendly ? <img src={require("./../assets/images/icons/passport-icon.png")} alt="" /> : null}
                      </div>
                  </div>

                  <div class="listing-footer row align-items-center">
                      {item.construction_area === null ? (
                        <div class="area col-8">
                            <img src={require("./../assets/images/icons/home-area.png")} alt="" />
                            {item.project_area} m<sup>2</sup>
                        </div>
                      ) : (
                        <div class="area col-8">
                            <img src={require("./../assets/images/icons/home-area.png")} alt="" />
                            {item.construction_area} m<sup>2</sup> / {item.project_area} m<sup>2</sup>
                        </div>
                      )}

                      <div class="beds col-4">
                          <img src={require("./../assets/images/icons/bed-for-listing.png")} alt="" />
                          {item.bed_count === null ? '?' : item.bed_count}
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
                      {MainStore.searchedCity === undefined ? null : (
                          <div>
                            <span>{MainStore.searchedCity.name}</span> offers {MainStore.searchedCity.property_count} properties
                          </div>
                      )}
                  </div>
                  <div class="listing-buttons col-lg-6 col-12">
                      <a href="#" class="change-view">Map View</a>

                      <select value={this.state.resultSortMethod} onChange={this.updateSorting}>
                          <option value="new" onClick={this.updatePropertyListOnSortingChange.bind(this, 'new')}>Show Latest First</option>
                          <option value="new_last" onClick={this.updatePropertyListOnSortingChange.bind(this, 'new_last')}>Show Latest Last</option>
                          <option value="cheap" onClick={this.updatePropertyListOnSortingChange.bind(this, 'cheap')}>Show Cheapest First</option>
                          <option value="exp" onClick={this.updatePropertyListOnSortingChange.bind(this, 'exp')}>Show Cheapest Last</option>
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
                                        <a href="#" onClick={this.goPrevious} class="arrow prev">
                                            <img
                                                src={require("./../assets/images/icons/arrow-chevron-prev.png")}
                                                alt="" 
                                            />
                                        </a>

                                        <div class="numbers">
                                            {this.createPaginatorArrows()}
                                        </div>

                                        <a href="#" onClick={this.goNext} class="arrow next">
                                            <img 
                                                src={require("./../assets/images/icons/arrow-chevron-next.png")} 
                                                alt="" 
                                            />
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
