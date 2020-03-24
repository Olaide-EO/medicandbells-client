import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';

import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import DossageDialog from './DossageDialog';



const useStyles = makeStyles(theme => ({
 

  expandOpen: {
    transform: 'rotate(180deg)',
  },


}));

 
export default function Dossage (props){
	 const classes = useStyles();
     
  const { handleHours, handleSelect, selectedValue } = props;

  const [open, setOpen] = React.useState(false);
 

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setOpen(true);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    handleSelect(value);
    handleHours(value);

  };

   

	return(

		 <React.Fragment>
		     
					<IconButton
			          
			          onClick={handleExpandClick}
			          aria-expanded={expanded}
			          aria-label="show more"
			        >
                        <ExpandMoreIcon />
                    </IconButton>

                    <DossageDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
		 </React.Fragment>
	)
}