import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import SingleMed from './SingleMed'

import { connect } from 'react-redux';


const styles = (theme) => ({
  root: {
    padding: theme.spacing(1)
  }
});

class ViewMed extends React.Component{

  
  

  render(){
   
   const { classes } = this.props;
   const { medication } = this.props.user;

  let medIndex = medication.findIndex(
               (med) => med.medId === this.props.match.params.medId );

      let newMed = medication[medIndex];

	  
	   let   myMedCrop = JSON.parse(JSON.stringify(newMed));
	  delete myMedCrop.medName;
	  delete myMedCrop.medId;
	  delete myMedCrop.createdAt;
	  delete myMedCrop.userId
	 

  	 return (
    <div className={classes.root}>
      
          <SingleMed />
        {console.log(newMed)}
        {console.log(myMedCrop)}
    </div>
  );
  }
 
};


const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})




export default connect(mapStateToProps)(withStyles(styles)(ViewMed));
