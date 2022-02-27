import React from "react";


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
                         <li> <a href="./">See full profile</a> </li>
                     </ul>
                 </div>
             );
         })}
     </div>
    );
}