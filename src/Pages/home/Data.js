import React , {useState} from "react";
import axios from "axios";
import LoadingIcons from 'react-loading-icons';
import UserCards from "./UserCards"


export default function Data(){
    const [data, setData] = useState("");
    const [load, setLoad] = useState ({ ready:false});
    
function searchData(){
    let apiUrl="https://jsonplaceholder.typicode.com/users";
    axios.get(apiUrl).then(handleResponse);  
}

function handleResponse(response){
    setData(response.data);
    setLoad({ ready:true});
}

    if (load.ready){
    return(
          <UserCards data={data} />
          
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