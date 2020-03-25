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
  const { initialTime } = props

  const [selectedDate, setSelectedDate] = React.useState(initialTime);

  const handleDateChange = date => {
    setSelectedDate(date);
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