import React from "react";

import Login from './Login'
//import { greeting } from "../../portfolio";

export default function LoginWithImage() {
  return (
    <div className="greet-main" id="greeting">
      
      <div className="greeting-main">
        
        
        <div className="greeting-text-div" id="logCon">
       <Login />
         </div>

        <div className="greeting-image-div">
          <img alt="E.O sitting on table" src={require("../../assests/images/undraw_authentication_fsn5.svg")}></img>
        </div>




      </div>

      
    </div>
  );
}

