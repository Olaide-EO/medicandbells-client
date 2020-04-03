import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import SingleMed from './SingleMed'
import './ViewMed.css';

import { connect } from 'react-redux';


const styles = (theme) => ({
   padding: theme.spacing(1)
});

class ViewMed extends React.Component{
      
      state = {
      	
      }
  
  componentWillMount(){

  }
  

  render(){
   
   const { classes } = this.props;
   const { singleMedication } = this.props.user;


	 	  
	  let iterateArr = Array.from(Array(singleMedication.freq), (_, i) => i+1);
	  
      
	 let anotherMed =  iterateArr.map((val, i) => ( 
							          	 
							          	 <SingleMed time={singleMedication[val].time} 
							          	 taken={singleMedication[val].taken}
							          	 dossage={singleMedication[val].dossage}
							          	 index={val} />
							          	) 
							          	 
							      )

  	 return (
    

       <div className="viewMedContainer">
  	     <div className="viewMed">
             
             
             
      
             
                    
                    {anotherMed}
               
  	
             
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
