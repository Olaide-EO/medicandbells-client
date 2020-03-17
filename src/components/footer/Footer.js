import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Footer.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));




function Footer() {

 

  return (
    

    
    <footer className="footer">

 
      <div className="foo-btm">
       
         
          <div className="footRow">    
              <p className="copyright">Copyright © 2020 <a href="https://ebenladipo.com">Olaide-E.O</a></p>     
          </div>

     
      </div>


    </footer>


  );
}

export default Footer;




