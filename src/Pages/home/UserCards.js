import React from "react";
import { Link } from "react-router-dom";
import "./UserCards.css";


export default function UserCards (props){

    return(
        <div className="UserCards">
         <div className="row justify-content-md-center"> 
          {props.data.map(function(user, index){
            return(
                 <div key={index} className="col-sm-5 text-start shadow user-card">
                     <div className="text-center mb-2 mt-3 fs-3 fw-bold profile-title">{user.username}</div>
                     <div className="row">
                         <div className="col-sm-4 text-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1160/1160865.png" alt="User Icon" className="mb-2 user-icon" />
                         {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Kiranshastry - Flaticon</a> */}
                         </div>
                         <div className="col-sm-8">
                     <ul className="fs-6 text-secondary user-info">
                         <li><strong>Name: </strong>{user.name}</li>
                         <li><strong>City: </strong>{user.address.city}</li>
                         <li><strong>Company: </strong>{user.company.name}</li>
                         <li className="text-center">
                         </li>
                     </ul>
                         </div>
                     <Link to = {`/user/${user.id}`} className="link">
                         <div className="text-center shadow link-button">See full profile</div>
                         </Link>
                     </div>
                     </div>
             );
         })}
     </div>
     </div>
    );
}