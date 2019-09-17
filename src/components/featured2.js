import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';
class Featured2 extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
            {header : " Beneste", content : "Beneste/Istanbul"},
            {header : " Beneste", content : "Beneste/Istanbul"},
            {header : " Beneste", content : "Beneste/Istanbul"}
          ],
    }
  }
  render(){
    const arr = this.state.featureds.map(item => {
      let output = null
      output  = ((
            <a href ="/property" className = "featured2Container">
                <p className = "featured2Header">{item.header}</p>
                <p className = "featureds2Content">{item.content}</p>
            </a>
        ))            
      return (output) 
    })
    return (
        <div className= "featured2">
            <p className = "featured2Header2">Featured Real Estate Projects</p>
            <div className = "featured2Container2">
                {arr}
            </div>
        </div>
    );
  }
}

export default Featured2;
