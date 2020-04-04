import React from 'react'
import {Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


//let oldPath = window.location.pathname;
const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
      <Route
         {...rest}
        render={(props) => authenticated === false ? <Redirect to='/login'/> : <Component {...props}/> 
    
       }
    />
     
);

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
})

AuthRoute.propTypes = {
    auth: PropTypes.object
}

export default connect(mapStateToProps)(AuthRoute);