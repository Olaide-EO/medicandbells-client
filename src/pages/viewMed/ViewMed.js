import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import SingleMed from './SingleMed'

import { connect } from 'react-redux';


const styles = (theme) => ({
   padding: theme.spacing(1)
});

class ViewMed extends React.Component{

  
  

  render(){
   
   const { classes } = this.props;
   const { singleMedication } = this.props.user;


	 	  
	  let iterateArr = Array.from(Array(singleMedication.freq), (_, i) => i+1);
	  
      
	 let anotherMed =  iterateArr.map((val, i) => ( 
							          	 
							          	 <React.Fragment>
							          	 {console.log(`${singleMedication[val].time}`)}
							          	 <SingleMed />
							          	 </React.Fragment>
							          	) 
							          	 
							      )

  	 return (
    

       <div className="addMedContainer">
  	     <div className="addMed">
              <Grid 
                    id="productGrid" 
                    item 
                    xs={12} 
                    sm={12} 
                    md={12} 
                    lg={12} 
                    xl={12}  
               >
                    <div>Hello Goons</div>
              </Grid>
  	
             
             
             
             <Grid 
                 id="productGrid" 
                 item 
                 xs={12} 
                 sm={12} 
                 md={12} 
                 lg={12} 
                 xl={12}  > 
             
                    <div>I am a Billionaire in dollars and pounds</div>
                    {anotherMed}
               </Grid>
  	
             
         </div>
    </div>




  );
  }
 
};


const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})




export default connect(mapStateToProps)(withStyles(styles)(ViewMed));
