import React from 'react';
import antalya_foto from './../static/antalya_foto.jpeg';
import './../App.css';

class Introduction extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
        featureds : [
          ],
    }
  }
  render(){
    return (
      <div class="policy-area row">
        <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-6 col-12 policy-text">
                  <div class="section-title">
                      Honesty is always the best policy
                  </div>

                  <p>We are a private consultancy company operating in Turkey since 2007 in the sector of real estate consultancy and investment. We manage to support you, foreigners willing to invest in real estate market in Turkey more specific Istanbul, for business or personal purposes with a full-service procedure from A to Z.</p>

                  <p>Established by its founder and manager Murat Aydin, our company was based first in its head office in The Ritz Carlton Istanbul to open then the doors of its second office in Selenium Plaza Sisli to be closer to you. As our logo indicates, “History references the future”, Our company has its own history with a wide background of experience and knowledge in the market. As the owner Murat Aydin used to work in Tourism Sector, he had to deal with foreign investors managing business in Turkey and who hated to stay in hotels and wished to have their own dwellings. And this is where the spark of helping them get their own properties came from. So, he started at a first place to buy properties on his name for the favor of his foreign friends since it was legally impossible at that time.</p>

                  <p><a href="#">Read More</a></p>
              </div>

              <div class="col-lg-6 col-12">
                  <figure class="policy-image m-0">
                      <img src={require("./../assets/images/best-policy.png")} alt="" class="img-fluid" />
                  </figure>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Introduction;
