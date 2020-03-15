import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollToTop from 'react-router-scroll-top'


import 'normalize.css/normalize.css';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
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
import signup from './pages/signup/Signup';
import login from './pages/login/Login';





import axios from 'axios';

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = "https://us-central1-scentsbyduntan.cloudfunctions.net/api";


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
          <MuiThemeProvider theme={theme}>
          <Provider store={store}>
       
          <Router>
          <ScrollToTop/>
          <LastLocationProvider>
           <Navbar/>
           
           <div className="container">
             <Switch>
               <Route exact path="/" component={home} />
               <Route exact path="/login" component={login} />
               
               <Route exact path="/signup" component={signup} />
              
               
             </Switch>
           </div>
            </LastLocationProvider>
          </Router>
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
