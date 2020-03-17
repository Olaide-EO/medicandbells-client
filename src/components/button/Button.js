import React from "react";
import {Link} from 'react-router-dom';
import "./Button.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <Link className="main-button" to={href}>
        {text}
      </Link>
    </div>
  );
}
