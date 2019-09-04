import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

class Featured1 extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
            {header: "Viewing Tip", content: "The very first step on your journey to buying property in Turkey is putting pen to paper! Think about why you want to purchase overseas.", imguri: antalya_foto },
            {header: "Viewing Tip2", content: "The very first step on your journey to buying property in Turkey is putting pen to paper! Think about why you want to purchase overseas.", imguri: antalya_foto },
            {header: "Viewing Tip2", content: "The very first step on your journey to buying property in Turkey is putting pen to paper! Think about why you want to purchase overseas.", imguri: antalya_foto },
          ],
        leftSize :135,
        previousLeftSize : 135
    }
  }
  render(){
    const arr = this.state.featureds.map(item => {
      let output = null
      output  = ((
          <div className = "featuredContainer">
              <div className = "featuredRow1" style = {{backgroundImage: item.imguri}}>
                  <p className = "featuredHeader">{item.header}</p>
              </div>
              <p className = "featuredsContent">{item.content}</p>
              <a className = "featureMore">Read More</a>
          </div>
        ))            
      return (output) 
    })
    return (
      <div className= "featured1">
        <p className = "featured1Header">Featured Real Estate Projects</p>
        <div className = "featuredContainer2">
          {arr}
        </div>
        
      </div>
    );
  }
}

export default Featured1;
