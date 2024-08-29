import { useEffect, useState } from "react"
import User from "./User";

export default function Posts(){
    const [users,setuser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setuser(data))
    },[])
    return(
        <div>
            <h3>Posts : {users.length}</h3>
            {
                users.map(user => <User post={user}/>)
            }
        </div>
    )
}