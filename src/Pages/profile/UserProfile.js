import React from "react";
import Map from "./Map";

export default function UserProfile(props){

    return(
        <div className="UserProfile">

       <header>Profile Page</header>
       
       <div className="row">
           <div className="col-sm-6">
            <ul>
                <li>ID: {props.data.id}</li>
                <li>Username: {props.data.username}</li>
                <li>Name: {props.data.name}</li>
                <li>Email: {props.data.email}</li>
                <li>Adress: {`${props.data.address.street}, ${props.data.address.suite},${props.data.address.zipcode} ${props.data.address.city}`}</li>
                <li>Phone Number: {props.data.phone}</li>
                <li>Website: {props.data.website}</li>
            </ul>
             <ul>
                 <li>Company: {props.data.company.name}</li>
                 <li>Catch Phrase: {props.data.company.catchPhrase}</li>
                 <li>BS: {props.data.company.bs}</li>
                
             </ul>
                
           </div>
           <div className="col-sm-6">
               <Map coords={props.data.address.geo} />
           </div>
       </div>
        </div>
    );
}