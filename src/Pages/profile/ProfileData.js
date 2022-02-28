import React , {useState} from "react";
import axios from "axios";
import LoadingIcons from 'react-loading-icons';
import UserProfile from "./UserProfile";
import { useParams } from "react-router-dom";


export default function Data(){
    const [data, setData] = useState("");
    const [load, setLoad] = useState ({ ready:false});
    let {id} = useParams();
    
function searchData(){
    let apiUrl=`https://jsonplaceholder.typicode.com/users/${id}`;
    axios.get(apiUrl).then(handleResponse);  
}

function handleResponse(response){
    console.log(response.data);
    setData(response.data);
    setLoad({ ready:true});
}

    if (load.ready){
    return(
          <UserProfile data={data} />
          
    ); 
    }
    else {
           searchData();
           return(
            <div className=" text-center m-5">
            <LoadingIcons.TailSpin stroke="#179479" className="loader" />
            <br /><br />
            Loading...
            </div>
            );
           }
}