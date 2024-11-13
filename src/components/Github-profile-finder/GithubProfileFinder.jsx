import { useEffect, useState } from "react"
import { FaDove } from "react-icons/fa";
import User from "./User";
import "./style.css"

export default function GithubProfileFinder({url}){

    const [userName , setUserName] = useState("realpriyanshu");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading ] = useState(true);


   async function fetchGithubProfile(){

    const res =  await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if(data){
        setLoading(false);
        setUserData(data);
        setUserName('');
    }
   }

   function handleSubmit(){
    fetchGithubProfile();

   }
    useEffect(()=>{
          fetchGithubProfile()
    },[])

    
    return (
        <>

        <div className="githubProfileFinder">
            <div className="Input-wrapper">
                <input name="searchByUsername"  type="text"  value={userName} onChange={(e)=>(setUserName(e.target.value))} placeholder="Enter github username"></input>
                <button onClick={()=>(handleSubmit())}>Search</button>
            </div>
         <div className="userData">
            {userData!==null?<User  user = {userData} />:null}
         </div>
        </div>

        </>
    )
}