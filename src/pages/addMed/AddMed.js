import React from 'react';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';


import MedName from './MedName';
import ReminderTimes from './ReminderTimes';
import './AddMed.css';


const styles = (theme) => ( {
    
    root: {
        flexGrow: 1,
        flexWrap: "wrap"
      },
 
}
)

class AddMed extends React.Component {
  
 constructor(){
       super();
       this.state = {
           medicationName: '',
           setReminderTime: false

       }
   }


   nameHandler = (val) => {
    this.setState({
      medicationName: val
    })
  }

  handleNext = () => {
  	if(this.state.medicationName !== ''){
  		this.setState({
  			setReminderTime: true
  		})
  	}
  }

  

  render(){

       return (


  
            
  	<div className="addMedContainer">
  	     <div className="addMed">
              <Grid id="productGrid" item xs={12} sm={8} md={6} lg={4} xl={3}  > <MedName nameHandler={this.nameHandler} />  </Grid>
  	
             
             {this.state.setReminderTime && (
             	<Slide direction="up" in={this.state.setReminderTime} mountOnEnter unmountOnExit>
             	 <Grid id="productGrid" item xs={12} sm={8} md={6} lg={4} xl={3}  > <ReminderTimes/>  </Grid>
  	             </Slide>
             	
             	)}
             
             <Grid id="productGrid" item xs={10} sm={8} md={6} lg={4} xl={3}  > 
             
              <div id="cardActions">
                  <Button 
                       disabled={this.state.medicationName === ''}   
                       size="medium" 
                       variant="contained" 
                       onClick={this.handleNext}
                       color="primary"
                       >
                       Next
                   </Button>
              </div>

               </Grid>
  	
             
         </div>
    </div>
  );	
  }
 
}



export default withStyles(styles)(AddMed);

