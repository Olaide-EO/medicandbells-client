
import React from "react";
import Signup from './Signup'
//import { greeting } from "../../portfolio";

export default function SignWithImage() {
  return (
    <div className="greet-main" id="greeting">
      
      <div className="greeting-main">
        
        
        <div className="greeting-text-div" id="logCon">
       <Signup />
         </div>

        <div className="greeting-image-div">
          <img alt="E.O sitting on table" src={require("../../assests/images/undraw_donut_love_kau1.svg")}></img>
        </div>




      </div>

      
    </div>
  );
}

