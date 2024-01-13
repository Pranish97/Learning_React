import { useState } from "react";
import { useContext } from "react"
import {AppContext} from "../App"

export const ChangeProfile = () =>{
    const {setUsername} = useContext(AppContext);
    const [newUserNmae,setNewUsername] = useState("");

    return(
        <div>
        <input 
        onChange={(event)=>{
            setNewUsername(event.target.value);
        }}
        />
        <button onClick={()=>{
            setUsername(newUserNmae);
        }}>Change User Name</button>

        </div>
    );
}