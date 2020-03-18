import React, { Component } from 'react';
 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
       
      </div>
     <div>
         {this.state.date}
     </div>
    );
  }
}