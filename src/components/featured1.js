import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';
import axios from 'axios';

class Featured1 extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          {header : "Bolu", id: 5, propertyCount: 2},
          {header : "İstanbul", id: 4, propertyCount: 1745},
          {header : "Bursa", id : 3, propertyCount: 51},
          {header : "Ankara", id : 2, propertyCount: 537},
          {header : "Antalya", id: 1, propertyCount: 281}
        ],
        guideCities: [],
        guideArrIndx: 0,
    }
  }

  componentWillMount() {
    var vm = this
    axios.get("http://138.201.16.232/properties/cities/")
        .then(res => {
            vm.setState({guideCities: res.data})
        })
  }

  increaseGArrIndx = () => {
    let guideArrIndx = this.state.guideArrIndx + 1

    this.setState({ guideArrIndx })
  }

  decreaseGArrIndx = () => {
    let guideArrIndx = this.state.guideArrIndx - 1

    if (guideArrIndx < 0)
      guideArrIndx = 0

    this.setState({ guideArrIndx })
  }

  render(){
    const arr = this.state.featureds.map(item => {
      let output = null
      output  = ((
        <div class="city-block col-lg-4 col-sm-6 col-12">
          <a href={"/City?city="+ item.id.toString() +"&page=1"} class="city-item">
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

    const guidesArr = this.state.guideCities.map(item => {
      let output = null
      output = ((
        <div class="city-block col-lg-4 col-sm-6 col-12">
          <a href={"/City?city="+ item.id.toString() +"&page=1"} class="city-item">
              <figure class="city-image">
                  <img src={'http://138.201.16.232'+item.gallery[0]}alt=""/>
              </figure>

              <div class="city-info">
                  <div class="city-name">{item.name}</div>
              </div>
          </a>
        </div>
      ))
      return output
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
        <div class="container" style={{marginTop: '100px'}}>
          <div class="row">
            <div class="section-title col-12" style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              Guides
              <div style={{display: 'flex', flexDirection: 'row', fontSize: '18px', textAlign: 'center'}}>
                <div 
                  style={{width: '30px', height: '30px', border: '3px solid #fff', borderRadius: '15px', cursor: 'pointer'}}
                  onClick={this.decreaseGArrIndx}
                >&lt;</div>
                <div 
                  style={{marginLeft: '10px', width: '30px', height: '30px', border: '3px solid #fff', borderRadius: '15px', cursor: 'pointer'}}
                  onClick={this.increaseGArrIndx}
                >&gt;</div>
              </div>
            </div>
            <div class="listing col-12 p-0 row m-0">
              {guidesArr.slice(this.state.guideArrIndx%guidesArr.length, this.state.guideArrIndx%guidesArr.length+3)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured1;