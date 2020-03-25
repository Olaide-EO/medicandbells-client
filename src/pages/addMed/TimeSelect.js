import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  TimePicker

} from '@material-ui/pickers';

export default function TimeSelect(props) {
  // The first commit of Material-UI
  const { time, setTimeInArray, index } = props

  const [selectedDate, setSelectedDate] = React.useState(time);

  const handleDateChange = date => {
    setSelectedDate(date);
    setTimeInArray(index, date);

  };

  return (
    <MuiPickersUtilsProvider  utils={DateFnsUtils}> 
     

       <TimePicker

        ampm={false}
        
        value={selectedDate}
        onChange={handleDateChange}
      />
      
    </MuiPickersUtilsProvider>
  );
}