import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import Container from '@material-ui/core/Container';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DoneIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimeSelect from '../addMed/TimeSelect';

import { connect } from 'react-redux';

import { takeMedication, cancelMedication } from '../../redux/actions/userActions';


const styles = (theme) => ({
  mainRoot: {
    padding: theme.spacing(2)
  },
  root: {
    height: '100%',

  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  notification: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  notificationAction: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  notificationIcon: {
    color: theme.palette.error.dark
  },
  notificationActionIcon: {
    color: theme.palette.primary.main
  },

  notificationValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
});

class SingleMed extends React.Component{

      state = {
        date: "",
        index: 0
      }

  setTimeInArray = (index, date) => {
      this.setState({
        date: date,
        index: index
      })
  }

  handleTakeDossage = () => {
    const { index, user: {singleMedication} } = this.props;
   
    let newSingleMed = JSON.parse(JSON.stringify(singleMedication));
     
       if( !newSingleMed[index].taken ){
           
           newSingleMed[index].taken = true;
           this.props.takeMedication(newSingleMed)
       }

  }

  handleCancelDossage = () => {
    const { index, user: { singleMedication} } = this.props;
    
    let anotherSingleMed = JSON.parse(JSON.stringify(singleMedication));

        if( !anotherSingleMed[index].cancel){

          anotherSingleMed[index].cancel = true;
          this.props.cancelMedication(anotherSingleMed)
        }
        
  }

  render(){
  const { classes, className, time, taken, dossage, index, cancel, ...rest } = this.props;

  

  return (
     <Container className={classes.root} component="main" maxWidth="xs" id="singleMed">
      

    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid id="singleMedTimeContainer" item>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                    Take {dossage}
                </Typography>
                <Typography 
                    variant="h4"
                    id="singleMedTime"
                    >
                  
                    <TimeSelect 
                         time={time} 
                         setTimeInArray={this.setTimeInArray} 
                         index={index}
                    />
                </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>

               <Tooltip title="Take Dossage" placement="top">
                  <IconButton style={{color: '#fff'}} onClick={this.handleTakeDossage} >
                   <DoneIcon className={classes.icon} />
                    </IconButton>
                </Tooltip>
                
            </Avatar>
          </Grid>
        </Grid>
        

         <Grid
          container
          justify="space-between"
        >
                <div className={classes.notification}>
                 { (!taken && !cancel)  && <NotificationsActiveIcon className={classes.notificationIcon} /> }
                 { (taken || cancel) &&  <NotificationsActiveIcon className={classes.notificationIcon} />}

                  <Typography
                    className={classes.caption}
                    variant="caption"
                  >
                   {(taken && !cancel) && <div>Dossage taken</div>}{(!taken && !cancel) && <div>Dossage not taken</div>}
                   { cancel && <div>Dossage canceled</div>}
                  </Typography>
                </div>


                <div  className={classes.notificationAction}>
                   
                   <Tooltip title="Cancel Alarm" placement="top">
                  <IconButton style={{color: '#fff'}} onClick={this.handleCancelDossage} >
                <CancelIcon className={classes.notificationIcon} />
                   </IconButton>
                   </Tooltip>
                
                

                </div>

         </Grid>
      </CardContent>
    </Card>
    </Container>
  );
}
};

SingleMed.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapActionsToProps = {
    takeMedication,
    cancelMedication
}



export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SingleMed));





//<CheckCircleIcon className={classes.notificationActionIcon} />
