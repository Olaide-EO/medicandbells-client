import React, { Component } from 'react';

import './Medications.css'


class Medications extends Component {

     state = {
    date: new Date(),
  }

    render() {
        
        return (
          <div className="medic-main">
                   <div classname="med-main">
                        
                        Hello From Medications' Component 
                   </div>
         </div>
        )
    }
}


export default Medications;
