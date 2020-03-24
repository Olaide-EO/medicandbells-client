import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const hours = [       
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


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function DossageDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog fullWidth={true}
        maxWidth='xs' onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Frequency and Dossage</DialogTitle>
      <List>
        {hours.map(hour => (
          <ListItem button onClick={() => handleListItemClick(hour)} key={hour}>
            <ListItemText primary={hour} />
          </ListItem>
        ))}

       
      </List>
    </Dialog>
  );
}


DossageDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


/**
export default function SimpleDialogDemo() {
 
  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />


      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>



      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}

*/