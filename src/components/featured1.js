import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

import "./../assets/styles/css/bootstrap.min.css";
import "./../assets/styles/css/webfonts.css";
import "./../assets/styles/css/icomoon.css";
import "./../assets/styles/css/fontawesome.min.css";
import "./../assets/styles/css/main.css";


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
          <div class="item">
              <div class="project-block">
                  <figure class="project-image">
                      <a href="#">
                          <span class="image" style= {{backgroundImage: require('./../assets/images/project-image-1.png')}}></span>

                          <h2 class="project-title">
                              Viewing Trip
                          </h2>
                      </a>
                  </figure>
                  <div class="project-details">
                      <div class="project-desc">
                          The very first step on your journey to buying property in Turkey is putting pen to paper! Think about why you want to purchase overseas.
                      </div>

                      <div class="project-buttons">
                          <a href="#" class="more">Read More</a>
                      </div>
                  </div>
              </div>
            </div>
        ))            
      return (output) 
    })
    return (
      <div class="featured-projects-1 row">
        <div class="container">
          <div class="row">
            <div class="section-title col-12">
                Featured Real Estate Projects
            </div>
            <div class="featured-project-list-1 owl-carousel col-12">
              {arr}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Featured1;
