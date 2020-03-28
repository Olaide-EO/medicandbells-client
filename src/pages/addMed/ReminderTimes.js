import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import ConvertHour from './ConvertHour';

import Dossage from './Dossage';

import TimeRange from './TimeRange';
import DecimalToHour from './DecimalToHour';
import TimeSelect from './TimeSelect';
import StringToTime from './StringToTime';


const times = [       
                       'Once daily', 
                       'Twice daily', 
                       '3 times a day',
                       '4 times a day', 
                       'Every 12 hours', 
                       'Every 8 hours', 
                       'Every 6 hours',
                       'Every 4 hours',  
                       '5 times a day',
                       '6 times a day',
                       '7 times a day',
                       '8 times a day',
                       '9 times a day',
                       '10 times a day',
                       '11 times a day',
                       '12 times a day',                         
                       'Every 3 hours',
                       'Every 2 hours',
                       'Every hour'
 ];



const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const initDate = new Date()
        initDate.setHours(8);
        initDate.setMinutes(0);
const singleDateArray = []
        singleDateArray.push(initDate);

export default function ReminderTimes(props) {

  const { getDossageArray, getTimeArray } = props;
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const [reminder, setReminder] = React.useState(true);
  
   const [selectedValue, setSelectedValue] = React.useState(times[0]);

   const [dossageArray, setDossageArray] = React.useState([1]);

  
  
  const [timeArray, setTimeArray] = React.useState(singleDateArray);

   
   React.useEffect(() => {
   	 
      getDossageArray(dossageArray);
      getTimeArray(timeArray);
}, []);


  const handleExpandClick = () => {
  	if(reminder === true){
      setExpanded(!expanded);
  	}
   
  };

  const handleReminder = () => {
  	if(reminder === true){
  		setReminder(!reminder);
  		setExpanded(false);
  	}
  	
  	if(reminder === false){
  		setReminder(!reminder);
  		setExpanded(true);
  	}
  	
  }

  const handleDossageArray = (number) => {
        const arr = Array(number).fill("1")
        return arr;
  }

  const handleSetSelectedValue = (value) => {
  	setSelectedValue(value)
  }

  const handleHoursSelected = (value) => {
      const numberOfTimes = ConvertHour(value);
      changeTimesToArray(numberOfTimes);
     const arrayFromTimes = handleDossageArray(numberOfTimes);
           setDossageArray(arrayFromTimes);
           getDossageArray(arrayFromTimes);

  }

  const changeTimesToArray = (value) => {
  	
  	let step = (23-8)/value
    let timeArray = TimeRange(8, 23, step)
    let decToHour = timeArray.map(x => DecimalToHour(x));
    let stringToTimeArray = decToHour.map(x => StringToTime(x));
        setTimeArray(stringToTimeArray);
        getTimeArray(stringToTimeArray);

  }

  const handleDossageNumber = (index, event) => {

  	const newDossageArray = Array.from(dossageArray);
  	newDossageArray[index] = event.target.value;
  	      setDossageArray(newDossageArray);
  	      getDossageArray(newDossageArray);

  }

  const setTimeInArray = (index, date) => {
    
     const newTimeArray = Array.from(timeArray);
     
     newTimeArray[index] = date;
     setTimeArray(newTimeArray);
     getTimeArray(newTimeArray);
     

  }
  return (
    <Card id="reminderTimes" className={classes.root}>
      <CardHeader
       
      
       
        title="Reminder"

        action={

          <React.Fragment>
          <IconButton aria-label="settings">
             <Switch checked={reminder} onChange={handleReminder} aria-label="login switch" />
          </IconButton>

          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        >
          <ExpandMoreIcon />
        </IconButton>
        </React.Fragment>
        }
        
      />
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={require("../../assests/images/undraw_season_change_f99v.svg")}
          title="Contemplative Reptile"
        />
         <CardContent>
         { (!expanded && reminder) &&  (
         timeArray.map(x => (<Typography style={{display: 'inline'}} >{x.toString().slice(16,21)}, </Typography>))
          )
        }
        {!reminder && (<Typography>Take as needed</Typography>)}
        </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
     
      <React.Fragment>   
		        <CardContent id="selectDossage">
		         {reminder && (
		         	<React.Fragment> 
                     
                     {selectedValue}

		         	<Dossage selectedValue={selectedValue} handleSelect={handleSetSelectedValue} handleHours={handleHoursSelected}/>

                  </React.Fragment>
		         ) } 
		        </CardContent>
				<CardContent>
				   
				   {
				   	timeArray.map((time, index) => {
                       
                       

				   		return (
				       
						    <div className="showTime">
				                      
				                <div id="timePicker">
				                      <TimeSelect setTimeInArray={setTimeInArray} index={index}  time={time} />
								</div>

		                                       
							    <div id="dossagePicker">
										
										 <TextField  
								            name="dossageAmount"
								            type="number"
								            onChange={(e) => handleDossageNumber(index, e)}					                               
										    InputProps={{
										    startAdornment: <InputAdornment position="start">Take</InputAdornment>,
												       }}
								            value={dossageArray[index]}
								                          
								         />
								                        
				                </div>
		                                        
						 </div>


				                         )}
				                 )
				   }

				   	
				</CardContent>
		</React.Fragment>
      </Collapse>
    </Card>
  );
}


