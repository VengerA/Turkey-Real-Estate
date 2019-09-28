import React from 'react';

import whatsapp_icon from './../static/whatsapp_logo.svg';
import helper_girl from './../static/helperGirl.svg'
import './../App.css';

class PropertyHelp extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
    }
  }
  render(){
    
    return (
      <aside id="sidebar" class="col-lg-3 col-12">
          <div class="sidebar-block">
              <form action="#" class="sidebar-form">
                  <div class="form-title">
                      How we can help you?
                  </div>

                  <div class="form-desc">
                      We are ready to support you with our expert team for all your questions
                  </div>

                  <div class="row mb-3">
                      <div class="col-lg-6 col-12">
                          <div class="form-group">
                              <input type="text" placeholder="Full Name"/>
                          </div>
                      </div>

                      <div class="col-lg-6 col-12">
                          <div class="form-group">
                              <input type="text" placeholder="Email"/>
                          </div>
                      </div>
                  </div>

                  <div class="form-group">
                      <input type="text" placeholder="Phone Number"/>
                  </div>

                  <div class="form-group">
                      <input type="text" placeholder="Message"/>
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
