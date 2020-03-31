import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import SingleMed from './SingleMed'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const SingleMedGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          <SingleMed />
        
    </div>
  );
};

export default SingleMedGrid;
