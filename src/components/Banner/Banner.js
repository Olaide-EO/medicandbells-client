import React from "react";
import "./Banner.css";
import SocialMedia from "../socialMedia/SocialMedia";
import Button from "../button/Button";
//import { greeting } from "../../portfolio";

export default function Banner() {
  return (
    <div className="greet-main" id="greeting">
      
      <div className="greeting-main">
        
        <div className="greeting-text-div">
           <div>
               <h1 className="greeting-text">Stay on schedule, once and for all</h1>
                  <p className="greeting-text-p subTitle">Busy and can't keep up with schedule? We provide instant  notification for your prescription schedule</p>
                  <SocialMedia />
               <div className="button-greeting-div">
                 <Button text="Login" href="/login" />
                 <Button text="Signup"  href="/signup" />
               </div>
           </div>
        </div>


        <div className="greeting-image-div">
          <img alt="E.O sitting on table" src={require("../../assests/images/undraw_season_change_f99v.svg")}></img>
        </div>

      </div>

      
    </div>
  );
}

