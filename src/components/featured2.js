import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';
class Featured2 extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          {header : " Bolu", id: 5, propertyCount: 2},
          {header : "İstanbul", id: 4, propertyCount: 1745},
          {header : "Bursa", id : 3, propertyCount: 51},
          {header : "Ankara", id : 2, propertyCount: 537},
          {header : "Antalya", id: 1, propertyCount: 281}
          ],
    }
  }
  render(){
    const arr = this.state.featureds.map(item => {
      let output = null
      output  = ((
        <div class="city-block col-lg-4 col-sm-6 col-12">
          <a href={"/City?city="+ item.id.toString() +"&amp;page=1"} class="city-item">
              <figure class="city-image">
                  <img src={require("./../assets/images/istanbul.png")}alt=""/>
              </figure>

              <div class="city-info">
                  <div class="city-name">{item.header}</div>
                  <div class="city-count">{item.propertyCount} Properties</div>
              </div>
          </a>
        </div>
        ))            
      return (output) 
    })
    return (
      <div id="top-cities" class="row">
        <div class="container">
          <div class="row">
              <div class="section-title col-12">
                  Top Cities
              </div>
              <div class="listing col-12 p-0 row m-0">
                  {arr}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Featured2;
