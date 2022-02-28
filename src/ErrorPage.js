import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";


export default function ErrorPage(){
return(
    <div className="fs-2 ErrorPage">
        <Link to = "/" className="link">
              <div className="return-link"> 🔙 Retrun Home</div>
             </Link> 
         Error 404: Page Not Found :(
    </div>
);

}