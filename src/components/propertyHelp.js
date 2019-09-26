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
                          Project Area
                      </div>

                      <div class="content">
                          {this.props.property === undefined ? '...' : (this.props.property.project_area == null ? 'unknown' : this.props.property.project_area)}
                      </div>
                  </div>

                  <div class="block">
                      <div class="title">
                          Construction Area
                      </div>

                      <div class="content">
                          {this.props.property === undefined ? '...' : (this.props.property.construction_area == null ? 'unknown' : this.props.property.construction_area)}
                      </div>
                  </div>

                  <div class="block">
                      <div class="title">
                          Green Area
                      </div>

                      <div class="content"> 
                        {this.props.property === undefined ? '...' : (this.props.property.green_area == null ? 'unknown' : this.props.property.green_area)}
                      </div>
                  </div>
                </div>
          </div>
      </aside>
    );
  }
}

export default PropertyHelp;
