import React from 'react';
import Container from '@material-ui/core/Container';

export default function Noimage() {
 
 
  
    return (
         <React.Fragment>
      		          <div>
				          <h2>Manage your meds</h2>
				          <p>Add your meds to be reminderd on time and track your health</p>
				      </div>

       <div className="noImageDiv">
          <img alt="no image" src={require("../../assests/images/undraw_no_data_qbuo.svg")}></img>
       </div>
       
      </React.Fragment>
   
    );
  
}














