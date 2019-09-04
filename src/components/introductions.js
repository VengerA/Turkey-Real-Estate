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
        <div className= "introduction">
            <p>Honesty is always the best policy</p>
        </div>
    );
  }
}

export default Introduction;
