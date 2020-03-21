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

import mockData from './Data';

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

  const [products] = useState(mockData);

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
        subtitle={`${products.length} in total`}
        title=""
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {products.map((product, i) => (
            <ListItem
              divider={i < products.length - 1}
              key={product.id}
            >
             <Link to={`/viewMed/:${product.id}`}>
              <ListItemAvatar >
               
              <PlaylistPlayIcon color="primary" />
           
              </ListItemAvatar>
              </Link>
              <ListItemText
                primary={product.name}
                secondary={`Updated ${product.updatedAt.fromNow()}`}
              />
              <Link to={`/viewMed/:${product.id}`}>
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
