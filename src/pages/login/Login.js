import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//MUI Stuff

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link as MaterialLink} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Login.css';

// Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';


const styles = (theme) => ({
      ...theme.spreadStyle,
      paper: {
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
      
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
})





class Login extends Component {
   constructor(){
       super();
       this.state = {
           email: '',
           password: '',
           errors: {},
           lastLocation: null
       }
   }


componentWillReceiveProps(nextProps){
if(nextProps.UI.errors){
    this.setState({ errors: nextProps.UI.errors });

}
}   


componentDidMount(){
   const {lastLocation} = this.props;

   if(lastLocation){
    this.setState({
      lastLocation: lastLocation.pathname
    })
   }
    
}

handleSubmit = (event) => {
 event.preventDefault();
 
 const userData = {
     email: this.state.email,
     password: this.state.password
 }
  this.props.loginUser(userData, this.props.history, this.state.lastLocation)
}
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}


    render() {
        const { classes, UI: { loading } } = this.props
        const { errors } = this.state;
        return (
          
        <Container id="loginContainer" className={classes.paper} component="main" maxWidth="xs">
      <CssBaseline />
      
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={this.state.email} 
            onChange={this.handleChange} 
                         
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password} 
            onChange={this.handleChange} 
                         
            autoComplete="current-password"
          />
           {errors.general && (
            <Typography variant="body2"
            className={classes.customError}>
              {errors.general}
              </Typography>
                     )}
          
          <div id="logFlex">
            
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
            
            
            <Link className="signupHere" to="/resetpassword" variant="body2">
                Forgot password?
              </Link>
            
           </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.submit}
          >
            Sign In
            {loading && (
                           <CircularProgress size={30} className={classes.progress}/>
                       )}
          </Button>
          <Grid container>
            <Grid id="signupGridItem" item>
              <Link id="loginLink" to="/signup" variant="body2">                              
                Don't have an Account ? <span className="loginSpan">Sign Up</span>           
              </Link>
            </Grid>
          </Grid>
        </form>
      
      
    </Container>
  

        )
    }
}


Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});



const mapActionsToProps = {
    loginUser
}



export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(withRouter(withLastLocation(Login))));
