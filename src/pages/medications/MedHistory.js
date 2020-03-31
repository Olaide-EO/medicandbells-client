import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import TimerOffIcon from '@material-ui/icons/TimerOff';

import { useSelector } from 'react-redux';



const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
 
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const MedHistory = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  

   let userMeds = useSelector(state => state.user.medication);

  return (
    <Grid
          item
          lg={4}
          md={6}
          xl={3}
          sm={6}
          xs={12}
        >
         
       
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader 
        
        title=""
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {userMeds.map((meds, i) => (
            <ListItem
              divider={i < userMeds.length - 1}
              key={meds.medId}
            >
             <Link to={`/viewMed/:${meds.medId}`}>
              <ListItemAvatar >
               
              <PlaylistPlayIcon color="primary" />
           
              </ListItemAvatar>
              </Link>
              <ListItemText
                primary={meds.medName}
                secondary={`Updated ${new Date(meds.createdAt)}`}
              />
              <Link to={`/viewMed/${meds.medId}`}>
              <IconButton
                edge="end"
                size="small"
              >
                <MoreVertIcon color="secondary"/>
              </IconButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
      
    </Card>
     </Grid>
  );
};

MedHistory.propTypes = {
  className: PropTypes.string
};

export default MedHistory;
