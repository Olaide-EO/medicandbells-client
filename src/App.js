import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollToTop from 'react-router-scroll-top'


import 'normalize.css/normalize.css';
import './App.css';
import './pages/login/fonts/material-icon/css/material-design-iconic-font.css';
import './pages/login/fonts/material-icon/css/material-design-iconic-font.min.css';

import jwtDecode from 'jwt-decode';
import AuthRoute from './util/AuthRoute';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';


// components
import Navbar from './components/navbar/Navbar';


//Pages
import home from './pages/home/Home';
import SignupIndex from './pages/signup/SignupIndex';
import LoginIndex from './pages/login/LoginIndex';
import Contactus from './pages/contactus/Contactus';




import axios from 'axios';



axios.defaults.baseURL = "https://us-central1-medsandbells.cloudfunctions.net/api";


const token = localStorage.FBIdToken;




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


//<random hash which is unique to user>@users.the-site.tld
class App extends Component {
      render(){
        return (
         
          <Provider store={store}>
       
          <Router>
          <ScrollToTop/>
          <LastLocationProvider>
           <Navbar/>
           
          
             <Switch>
               <Route exact path="/" component={home} />
               <Route exact path="/login" component={LoginIndex} />
               
               <Route exact path="/signup" component={SignupIndex} />
               <Route exact path="/contactus" component={Contactus} />
               
             </Switch>
           
            </LastLocationProvider>
          </Router>
          </Provider>
         
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
