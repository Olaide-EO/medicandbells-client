import React, { Component } from 'react';

import SignupWithImage from './SignupWithImage'
import './Signup.css';

import Footer from '../../components/footer/Footer';

class SignupIndex extends Component {

    render() {
        
        return (
          <div>
          <SignupWithImage />
          <Footer />
         </div>

        )
    }
}


export default SignupIndex;
