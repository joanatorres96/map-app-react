import React from "react";
import Map from "./Map";
import "./UserProfile.css";
import { Link } from "react-router-dom";


export default function UserProfile(props){

    return(
        <div className="UserProfile">
<Link to = "/" className="link">
                         <div className="home-link"> 🔙 Retrun Home</div>
                         </Link>       <header>Profile Page</header>

       <img src="https://cdn-icons-png.flaticon.com/512/747/747545.png" alt="User Photograph" className="mb-2 user-photo" />
                         {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a> */}
       <div className="row content">
           <div className="col-sm-6 mt-5 ">
            <ul className="text-secondary profile-info">
                <div className="card-title">Personal Info</div>
                <li><strong>ID: </strong>{props.data.id}</li>
                <li><strong>Username: </strong>{props.data.username}</li>
                <li><strong>Name: </strong>{props.data.name}</li>
                <li><strong>Email: </strong>{props.data.email}</li>
                <li><strong>Adress: </strong>{`${props.data.address.street}, ${props.data.address.suite},${props.data.address.zipcode} ${props.data.address.city}`}</li>
                <li><strong>Phone Number: </strong>{props.data.phone}</li>
                <li><strong>Website: </strong>{props.data.website}</li>
            </ul>
             <ul className="text-secondary profile-info">
             <div className="card-title">Company Info</div>
                 <li><strong>Company: </strong>{props.data.company.name}</li>
                 <li><strong>Catch Phrase: </strong>{props.data.company.catchPhrase}</li>
                 <li><strong>BS: </strong>{props.data.company.bs}</li>
                
             </ul>
                
           </div>
           <div className="col-sm-6 mt-5">
               <Map coords={props.data.address.geo} />
           </div>
       </div>
        </div>
    );
}