import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

class ContactFooter extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          ],
    }
  }
  render(){
    return (
      <div class="help-form row">
        <div class="container">
            <div class="row">
                <div class="section-title col-12">
                    How we can help you?
                </div>

                <div class="section-desc col-12">
                    We are ready to support you with our expert team for all your questions
                </div>
            </div>
            <div class="row mt-lg-5 mb-3 align-items-center">
                <div class="col-lg-8 col-12">
                    <form action="" class="help-form row">
                        <div class="col-lg-6 col-12">
                            <div class="form-blocks">
                                <div class="form-group">
                                    <input type="text" placeholder="Full Name"/>            
                                </div>

                                <div class="form-group">
                                    <input type="email" placeholder="Email"/>
                                </div>

                                <div class="form-group">
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12">
                            <div class="form-blocks">
                                <div class="form-group">
                                    <textarea placeholder="Message"></textarea>
                                </div>

                                <div class="form-group">
                                    <button type="submit">SEND MESSAGE</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-lg-4 col-12 text-center d-none d-lg-block">
                    <div class="to-up">
                        <span class="button">
                            <img src={require("./../assets/images/icons/arrow-up.png")} alt="" />
                        </span>

                        <span class="title">BACK TO TOP</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default ContactFooter;
