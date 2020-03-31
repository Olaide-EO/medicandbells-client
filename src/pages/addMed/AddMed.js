import React from 'react';
import { withRouter } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import MedName from './MedName';
import ReminderTimes from './ReminderTimes';
import './AddMed.css';


import { connect } from 'react-redux';
import { addMedication } from '../../redux/actions/userActions';


const styles = (theme) => ( { 
    root: {
        flexGrow: 1,
        flexWrap: "wrap"
      },
}
)



class AddMed extends React.Component {
  
       state = {
           medicationName: '',
           dossageArray: [],
           timeArray: [],
           setReminderTime: false

       }

   nameHandler = (val) => {
    this.setState({
      medicationName: val
    })
  }

  
  handleStateData = (currentState) => {

            let keys = currentState.timeArray;
            let values = currentState.dossageArray;

            let result = {};

            
            keys.forEach((key, i) => {

             return result[key] = {
                               time: key,
                               dossage: values[i],
                               taken: false
                             }

            });

            result.medName = currentState.medicationName;
            return result;
  }

  handleNext = () => {
  	if(this.state.medicationName !== '' ){
  		this.setState({
  			setReminderTime: true
  		})
  	}
   
    
    if(this.state.medicationName !== '' && this.state.dossageArray.length !== 0 && this.state.timeArray.length !== 0){
      
      let arrayToDatabase = this.handleStateData(this.state)
     this.props.addMedication(arrayToDatabase, this.props.history);
     
    }

  }


  getTimeArray = (timeArray) => {
      this.setState({
           timeArray
         })
  }


  getDossageArray = (dossageArray) => {
      this.setState({
        dossageArray
      })
  }
  


  render(){

       return ( 
            
  	<div className="addMedContainer">
  	     <div className="addMed">
              <Grid 
                    id="productGrid" 
                    item 
                    xs={12} 
                    sm={8} 
                    md={6} 
                    lg={4} 
                    xl={3}  
               >
                    <MedName nameHandler={this.nameHandler} />  
              </Grid>
  	
             
             {this.state.setReminderTime && (
               	<Slide 
                   direction="up" 
                   in={this.state.setReminderTime} 
                   mountOnEnter 
                   unmountOnExit
                   >
                     	 <Grid 
                          id="productGrid" 
                          item 
                          xs={12}
                          sm={8}
                          md={6} 
                          lg={4} 
                          xl={3}  
                          > 
                             <ReminderTimes 
                                getTimeArray={this.getTimeArray} 
                                getDossageArray={this.getDossageArray}
                              />  
                       </Grid>
  	            </Slide>
             	
             	)}
             
             <Grid 
                 id="productGrid" 
                 item 
                 xs={10} 
                 sm={8} 
                 md={6} 
                 lg={4} 
                 xl={3}  > 
             
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


const mapStateToProps = state => ({
    user: state.user,
    data: state.data
})

const mapActionsToProps = {
    addMedication
}



export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(withRouter(withLastLocation(AddMed))));
