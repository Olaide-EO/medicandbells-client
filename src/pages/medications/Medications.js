import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import './Medications.css'


import withStyles from '@material-ui/core/styles/withStyles';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Noimage from './Noimage';
import SingleMed from './SingleMed';
import MedHistory from './MedHistory'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import { connect } from 'react-redux';




const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
});






class Medications extends Component {

     state = {
    date: new Date(),
    open: false
  }


  handleClose = () => {
    this.setState({
    	open:false
    })
  };

  handleToggle = () => {
    this.setState({open: !this.state.open})
  };

    render() {
 
        const { 
        classes, 
        user: { 
           credentials: {  createdAt, firstName, lastName,phoneNumber, address, state},
           loading,
           loadingMedication,
           authenticated,
           medication
      }
    } = this.props;



        const history = !medication ? <div>love laide</div> : medication.length == 0 ? <Noimage/> : <MedHistory/>

        const medicImage = !medication ? "" : medication.length == 0 ? "" : " medicImage" 


		const display =  (loading || loadingMedication) ? (
			             
					     
					      <Backdrop className={classes.backdrop} open={loading || loadingMedication } onClick={this.handleClose}>
					        <CircularProgress color="inherit" />
					      </Backdrop>
					   
					   ) : (
                           
                           <div className={"medic-main" + medicImage}>
			                   <div className="med-main">
			                         
							       {history}
			                   </div>
     
		                     <Link to="/addMed">                                                                               
						        <Fab id="addButton" color="secondary" aria-label="add">
						          <AddIcon />
						        </Fab>
						        </Link>

                           </div>

					   )

        return (
         <React.Fragment>
         {display}
         </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data
})

Medications.propTypes = {
    
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}


export default connect(mapStateToProps)(withStyles(styles)(Medications));




/*
<Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>

 */