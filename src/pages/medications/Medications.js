import React, { Component } from 'react';

import './Medications.css'

import withStyles from '@material-ui/core/styles/withStyles';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});






class Medications extends Component {

     state = {
    date: new Date(),
  }

    render() {
        const { classes } = this.props;
        return (
          <div className="medic-main">
                   <div classname="med-main">
                        
                        Hello From Medications' Component 
                   </div>
     
                   
				        <Fab id="addButton" color="secondary" aria-label="add">
				          <AddIcon />
				        </Fab>
                

         </div>
        )
    }
}


export default withStyles(styles)(Medications);




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