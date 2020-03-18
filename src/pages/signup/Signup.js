import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
 import { withRouter } from 'react-router-dom';

//import logo from '../images/favicon.ico';
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


// redux stuff
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';


const styles = (theme) => ({
       
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
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
})


class Signup extends Component {
   constructor(){
       super();
       this.state = {
           email: '',
           password: '',
           confirmPassword: '',
            firstName: '',
           lastName: '',
           errors: {}
       }
   }

 componentWillReceiveProps(nextProps){
    if(nextProps.UI.errors){
        this.setState({ errors: nextProps.UI.errors });
      }
    }   
    

handleSubmit = (event) => {
 event.preventDefault();
 this.setState({
     loading: true
 })
 const newUserData = {
     email: this.state.email,
     password: this.state.password,
     confirmPassword: this.state.confirmPassword,
     firstName: this.state.firstName,
     lastName: this.state.lastName
 }
this.props.signupUser(newUserData, this.props.history);
}
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    })
}

handlePasswordChange = (event) => {
   this.setState({
    [event.target.name]: event.target.value,
    errors: this.state.password.length > 4 ? {} : { password: 'password should be six characters or more' }
   })

}


    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        return (
       
        <Container id="loginContainer" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                type="test"
                helperText={errors.firstName}
                error={errors.firstName ? true : false}
                value={this.state.firstName} 
                onChange={this.handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                helperText={errors.lastName}
                error={errors.lastName ? true : false}
                value={this.state.lastName} 
                onChange={this.handleChange}
              />
            </Grid>

           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email} 
                onChange={this.handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password} 
                onChange={this.handlePasswordChange}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                label="Confirm Password" 
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                value={this.state.confirmPassword} 
                onChange={this.handleChange} 
                fullWidth/>

            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Subscribe to latest update."
              />
            </Grid>
          </Grid>
          {errors.general && (
                         <Typography variant="body2"
                         className={classes.customError}>
                         {errors.general}
                         </Typography>
                     )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Sign Up
            {loading && (
                           <CircularProgress size={30} className={classes.progress}/>
                       )}

          </Button>
          <Grid container justify="flex-end">
            <Grid item id="loginGridItem">
              <Link id="loginLink"  to="login" variant="body2">
                Already have an account? <span className="loginSpan"> Sign in</span>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  

        )
    }
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

 //<img src={logo} alt="monkey" className={classes.image}/>

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(withRouter(Signup)));