import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function TimeSelect(props) {
  // The first commit of Material-UI
  const { initialTime } = props

  const [selectedDate, setSelectedDate] = React.useState(initialTime);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}> 
        <KeyboardTimePicker
          margin="normal"
          ampm={false}
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      
    </MuiPickersUtilsProvider>
  );
}