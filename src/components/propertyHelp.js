import React from 'react';

import whatsapp_icon from './../static/whatsapp_logo.svg';
import helper_girl from './../static/helperGirl.svg'
import './../App.css';

import axios from 'axios';

class PropertyHelp extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
        clientName: '',
        clientPhone: '',
        clientEmail: '',
        clientMessage: '',
    }
  }

  onNameChange = (e) => {
    this.setState({ clientName: e.target.value })
  }

  onPhoneChange = (e) => {
    this.setState({ clientPhone: e.target.value })
  }

  onEmailChange = (e) => {
    this.setState({ clientEmail: e.target.value })
  }

  onMessageChange = (e) => {
    this.setState({ clientMessage: e.target.value })
  }

  onSubmitHandler = (e) => {
      e.preventDefault()

      if (this.state.clientName == '' || this.state.clientPhone == '' || this.props.property === undefined) {
          return
      }

      axios.post('http://138.201.16.232/properties/send-mail/', {
          original_url: 'https://www.hurriyetemlak.com/antalya-kemer-merkez-satilik/villa/'+this.props.property.listing_id,
          url: 'http://turkeyrealestate.com/property?pid='+this.props.property.id,
          id: this.props.property.id,
          customer_name: this.state.clientName,
          customer_phone: this.state.clientPhone,
          customer_email: this.state.clientEmail,
          customer_message: this.state.clientMessage,
          owner_name: this.props.property.publisher,
          owner_phone: JSON.parse(this.props.property.phone_numbers)[0]
      })
        .then(res => {
            alert("Your response was saved succesfully.")
            window.location = '/'
        })
  }

  render(){
    
    return (
      <aside id="sidebar" class="col-lg-3 col-12">
          <div class="sidebar-block">
              <form class="sidebar-form" onSubmit={this.onSubmitHandler}>
                  <div class="form-title">
                      How we can help you?
                  </div>

                  <div class="form-desc">
                      We are ready to support you with our expert team for all your questions
                  </div>

                  <div class="row mb-3">
                      <div class="col-lg-6 col-12">
                          <div class="form-group">
                              <input type="text" placeholder="Full Name" value={this.state.clientName} onChange={this.onNameChange}/>
                          </div>
                      </div>

                      <div class="col-lg-6 col-12">
                          <div class="form-group">
                              <input type="text" placeholder="Email" value={this.state.clientEmail} onChange={this.onEmailChange}/>
                          </div>
                      </div>
                  </div>

                  <div class="form-group">
                      <input type="text" placeholder="Phone Number" value={this.state.clientPhone} onChange={this.onPhoneChange} />
                  </div>

                  <div class="form-group">
                      <input type="text" placeholder="Message" value={this.state.clientMessage} onChange={this.onMessageChange}/>
                  </div>

                  <div class="form-group">
                      <button type="submit">SEND</button>
                  </div>
              </form>
              
              <div class="info-blocks">
                    <div class="block">
                        <div class="title">
                            Project District: 
                        </div>

                        <div class="content">
                            {this.props.property === undefined ? '...' : (this.props.property.district_name == null ? 'unknown' : this.props.property.district_name + '/' + this.props.property.subdistrict_name )}
                        </div>
                    </div>

                    <div class="block">
                        <div class="title">
                            Room Structure:
                        </div>

                        <div class="content">
                            {this.props.property === undefined ? '...' : (this.props.property.room_schema == null ? 'unknown' : this.props.property.room_schema)}
                        </div>
                    </div>

                    <div class="block">
                        <div class="title">
                            Bath Count:
                        </div>

                        <div class="content"> 
                            {this.props.property === undefined ? '...' : (this.props.property.bath_count == null ? 'unknown' : this.props.property.bath_count)}
                        </div>
                    </div>
                    
                    <div class="block">
                        <div class="title">
                            Gross Metersquare:
                        </div>

                        <div class="content"> 
                            {this.props.property === undefined ? '...' : (this.props.property.bath_count == null ? 'unknown' : this.props.property.project_area)} m<sup>2</sup>
                        </div>
                    </div>

                    <div class="block">
                        <div class="title">
                            Metersquare: 
                        </div>

                        <div class="content"> 
                            {this.props.property === undefined ? '...' : (this.props.property.construction_area == null ? 'unknown' : this.props.property.construction_area)} m<sup>2</sup>
                        </div>
                    </div>

                    <div class="block">
                        <div class="title">
                            Floor / Total Floor:
                        </div>

                        <div class="content"> 
                            {this.props.property === undefined ? '...' : (this.props.property.floor_index == null ? 'unknown' : this.props.property.floor_index + ' / ' + this.props.property.floor_count)}
                        </div>
                    </div>
                </div>
          </div>
      </aside>
    );
  }
}

export default PropertyHelp;
