import React from 'react';

import home_icon from "./../static/home.svg";
import bed_icon from "./../static/bed_logo.svg";
import bathroom_icon from "./../static/bathroom_logo.svg";
import border_home_icon from "./../static/cerceveEv_logo.png";

import {observer} from 'mobx-react';

import './../App.css';

import background from './../assets/images/big-property-image.png';
import MainStore from './store';

@observer
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        showEmail: false,
        showShare: false,
        imgArr : [{item1:1},{tem2:2},{item3:3},{item:4}]
    }
  }

    showEmail = () => {
        let show = this.state.showEmail
        this.setState({showEmail: !show})
    }

    showShare = () => {
        let show = this.state.showShare
        this.setState({showShare: !show})
    }

  render(){
    if (this.props.property === undefined)
        return null

    const imageArr = this.state.imgArr.map(item => {
        let output = (
            <div className = "Property1ImageElement">
                <p>RESİM</p>
            </div>
        )
        return output
    })
    const email = () => {
        let output = null
        if(this.state.showEmail){
            output = (
                <div class="send-mail-area">
                    <div class="section-title">
                        Inspire new life
                    </div>
                    
                    <input type="text" placeholder="Sender"/>

                    <input type="text" placeholder="Sender
                    Recipient E Mail Address"/>

                    <button type="submit">Send E Mail / Send</button>
                </div>
            )
        }
        return output
    }

    const share = () => {
        let output = null
        if(this.state.showShare){
            output = (
                <div class="share-box">
                    <a href="#" class="social">
                        <i class="fab fa-facebook-f"></i>
                    </a>

                    <a href="#" class="social">
                        <i class="fab fa-twitter"></i>
                    </a>

                    <a href="#" class="social">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
                
            )
        }
        return output
    }

    let AmentitiesaArr = [];
    let LittleImages = [];

    if (this.props.property !== undefined) {
        AmentitiesaArr = this.props.property.amenities.map(item => {
            //sazak burdaki amentities arr i gidip property.amentities diye ceksen daha guzel olabilir sana birakiyorum orayi
            let output = null 
            output = (
                <div class="block col-lg-3 col-6">
                    <div class="block-item">
                        <div class="icon">
                            <img src={require("./../assets/images/icons/cafe.png")} alt="" />
                        </div>
    
                        <div class="content">
                            {item}
                        </div>
                    </div>
                </div>
            )
            return output
          })

        LittleImages = this.props.property.gallery.map((path, index) => (
                <a href="#" class="little-image" data-lightbox="property-images" data-title={'Image ' + index}>
                    <img src={'http://138.201.16.232' + path} alt="" />
                </a>
            ))
    }

    return (
        <div class="property-details col-lg-9 col-12">
            <figure class="property-image" style={{backgroundImage: 'url('+this.props.property.cover_image+')'}}>
                <div class="property-buttons">
                    <div class="property-lightbox">
                        {LittleImages}
                    </div>

                    <div class="property-actions">
                        <div class="hearth">
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
                        <div class="share">
                            {share()}
                            <div class="icon" onClick = {()=> this.showShare()}>
                                <img src={require("./../assets/images/icons/share.png")} alt="" />
                            </div>
                        </div>
                        <div class="email">
                            {email()}

                            <div class="icon" onClick = {() => {this.showEmail()}}>
                                <img src={require("./../assets/images/icons/email-inside.png")} alt="" />
                            </div>
                        </div>
                        <div class="print">
                            <div class="icon">
                                <img src={require("./../assets/images/icons/print.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
            <div class="property-info col-12 row m-0">
                <div class="property-area col-lg-6 col-12">
                    <div class="location">{this.props.property.city_name} / {this.props.property.district_name} / {this.props.property.subdistrict_name}</div>
                    <div class="name">{this.props.property.bed_count} Bedroom {this.props.property.project_area} m<sup>2</sup> Apartment in {this.props.property.district_name}</div>
                </div>

                <div class="property-price col-lg-6 col-12">
                    <div class="block">
                        <div class="title">
                            Starts From
                        </div>

                        <div class="price">
                        {this.props.property.price_start.toLocaleString()} TRY
                        </div>
                    </div>
                </div>
            </div>
            <div class="property-blocks col-12 row m-0">
                <div class="blocks col-12 p-0 row align-items-center m-0">
                    <div class="block col-lg col-6">
                        <div class="icon">
                            <img src={require("./../assets/images/icons/home-blue.png")} alt=""/>
                        </div>
                        <div class="count">
                            Residence
                        </div>
                    </div>

                    <div class="block col-lg col-6">
                        <div class="icon">
                            <img src={require("./../assets/images/icons/bed-blue.png")} alt=""/>
                        </div>
                        <div class="count">{this.props.property.bed_count === null ? '?' : this.props.property.bed_count} </div>
                        <div class="name">
                        Bedroom
                        </div>
                    </div>

                    <div class="block col-lg col-6">
                        <div class="icon">
                            <img src={require("./../assets/images/icons/bathroom-blue.png")} alt=""/>
                        </div>
                        <div class="count">{this.props.property.bath_count === null ? '?' : this.props.property.bath_count} </div>
                        <div class="name">
                        Bathroom
                        </div>
                    </div>

                    <div class="block col-lg col-6">
                        <div class="icon">
                            <img src={require("./../assets/images/icons/home-area.png")} alt=""/>
                        </div>
                        {this.props.property.construction_area === null ? (
                            <div class="name">
                                {this.props.property.project_area} m<sup>2</sup>
                            </div>
                        ) : (
                            <div class="name">
                                {this.props.property.construction_area} m<sup>2</sup> / {this.props.property.project_area} m<sup>2</sup>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
            <div class="property-description col-12">
                <h1 class="property-title">
                    Comfort of Residence in Central {this.props.property.district_name}
                </h1>

                <p>{this.props.property.description}</p>
            </div>

            <div class="property-amenities col-12">
                <div class="section-title">Amenities</div>

                <div class="amenity-blocks row">
                    {AmentitiesaArr}

                </div>
            </div>
        </div>
    );
  }
}

export default App;
