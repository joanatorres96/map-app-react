import React from "react";
import { Link } from "react-router-dom";



export default function UserCards (props){
    return(
        <div className="row">
        {props.data.map(function(user, index){
             return(
                 <div key={index} className="col-sm-3 margin-4 border shadow" >
                     <ul>
                         <li>Username: {user.username}</li>
                         <li>Name: {user.name}</li>
                         <li>Email: {user.email}</li>
                         <li>
                         <Link to = {`/user/${user.id}`} >
                         See full profile
                         </Link>
                         </li>
                     </ul>
                 </div>
                
             );
         })}
     </div>
    );
}