import React from 'react'
import {Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//let oldPath = window.location.pathname;
const LoginRoute = ({ component: Component, authenticated, ...rest }) => (
      <Route
         {...rest}
        render={(props) => authenticated === true ? <Redirect to='/'/> : <Component {...props}/> 
    
       }
    />
     
);

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

LoginRoute.propTypes = {
    user: PropTypes.object
}

export default connect(mapStateToProps)(LoginRoute);