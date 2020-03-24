import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';




const useStyles = makeStyles(theme => ({
	
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 0,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MedName(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.nameHandler(event.target.value);
  }

  return (
  	
  	
    <Card id="addCard" className={classes.root}>
     <CardHeader
        
        title="Medication Name"

         
        
      />
      <CardActionArea>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={require("../../assests/images/undraw_season_change_f99v.svg")}
          title="Contemplative Reptile"
        />
        <CardContent>
        
			      <Input id="medNameInput" defaultValue="" onChange={handleChange} placeholder="Add Brand Name" inputProps={{ 'aria-label': 'prescription' }} />
			     
         
        </CardContent>
      </CardActionArea>
     
    </Card>
     
  );
}


