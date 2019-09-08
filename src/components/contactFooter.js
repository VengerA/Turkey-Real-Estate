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
        <div className= "Footer2">
            <div className = "Footer2Container1">
                <p className = "Footer2Header">How we can help you?</p>
                <p className = "Footer2Content">We are ready to support you with our expert team for all your questions</p>
            </div>
            <div className = "Footer2Container2">
                <input className = "Footer2Input1" type ="text" placeholder = "Full Name"/>
                <input className = "Footer2Input1" type ="email" placeholder = "Email"/>
                <input className = "Footer2Input1" type ="tel" placeholder = "Phone Number"/>
            </div>
            <div className = "Footer2Container2">
                <textarea className="Footer2Input2" placeholder = "Messeage"/>
                <button className= "Footer2Button">Send Message</button>
            </div>
        </div>
    );
  }
}

export default ContactFooter;
