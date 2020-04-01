import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from 'react-router-scroll-top'


import 'normalize.css/normalize.css';
import './App.css';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';


import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


import './pages/login/fonts/material-icon/css/material-design-iconic-font.css';
import './pages/login/fonts/material-icon/css/material-design-iconic-font.min.css';

import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
import LoginRoute from './util/LoginRoute';

// Redux
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';


import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

// components
import Navbar from './components/navbar/Navbar';



//Pages
import home from './pages/home/Home';
import SignupIndex from './pages/signup/SignupIndex';
import LoginIndex from './pages/login/LoginIndex';
import Contactus from './pages/contactus/Contactus';
import Faq from './pages/faq/Faq';
import Profile from './pages/profile/Profile';
import Medications from './pages/medications/Medications'
import ViewMed from './pages/viewMed/ViewMed';
import AddMed from './pages/addMed/AddMed';

import axios from 'axios';


const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = "https://us-central1-medsandbells.cloudfunctions.net/api";


const token = localStorage.FBIdToken;



setTimeout(function(){

if(token){
 const decodedToken = jwtDecode(token);
 if(decodedToken.exp * 1000 < Date.now()){
   store.dispatch(logoutUser())
   
 } else {
   store.dispatch({ type: SET_AUTHENTICATED })
   axios.defaults.headers.common['Authorization'] = token;
   store.dispatch(getUserData())
 }
}


 }, 3000);



//<random hash which is unique to user>@users.the-site.tld
class App extends Component {
      render(){
        return (
          <MuiThemeProvider theme={theme}>
          <Provider store={store}>
           <PersistGate loading={<Backdrop open={true}>
                  <CircularProgress color="inherit" />
                </Backdrop>} persistor={persistor}>
          <Router>
          <ScrollToTop/>
          <LastLocationProvider>
           <Navbar/>
           
          
             <Switch>
               <Route exact path="/" component={home} />
               <LoginRoute exact path="/login" component={LoginIndex} />
               
               <LoginRoute exact path="/signup" component={SignupIndex} />
               <Route exact path="/contactus" component={Contactus} />
               <Route exact path="/faq" component={Faq} />

               <AuthRoute exact path="/profile" component={Profile} />

               <AuthRoute exact path="/addMed" component={AddMed} />

               <AuthRoute exact path="/viewMed/:medId" component={ViewMed} />

               <Route exact path="/medications" component={Medications} />

               
             </Switch>
           
            </LastLocationProvider>
          </Router>
          </PersistGate>
          </Provider>

          </MuiThemeProvider>
         
        );
      }
}


//<AuthRoute exact path="/checkout-step1" component={AddressFormStep}/>
//<AuthRoute exact path="/checkout-step2" component={ReviewStep}/>

/**
  <Route exact path="/admin" component={admin} />
               <Route exact path="/admin/users" component={Users} />
               <Route exact path="/admin/users/:userName" component={Users} />
               <Route exact path="/admin/orders" component={Orders} />
               <Route exact path="/admin/orders:orderId" component={Orders} />
               <Route exact path="/admin/product" component={AddProduct} />
               <Route exact path="/admin/product/special" component={AddProduct} />
               
 
 */

export default App;
