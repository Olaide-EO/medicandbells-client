import React from 'react';

import './Login.css';



class Logintest extends React.Component{
       
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


  render(){

    return (
     <div>Welcome to Login Component</div>
      )
  }

}

export default Logintest;