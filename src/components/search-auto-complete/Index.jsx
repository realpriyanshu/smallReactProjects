import { useEffect, useState } from "react"

export default function SearchAutoComplete(){

    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [ users , setUsers] = useState([]);
    const [ searchParam , setSearchParam] = useState();
    const [showDropDown , setShowDropDown] = useState();
    const [filteredUsers , setFilteresdUsers] = useState();

    function handleChange(event){
             const query = query.target.value.toLowerCase();
    }

    async function fetchUsersData(){
        try{
            const res = await fetch("https://dummyjson.com/users?limit=10");
            const data = await res.json();
            
            if(data && data.users && data.users.length>0){
                setUsers(data.users.map((item)=>item.firstName))
                setLoading(false);
                setError(null)
                
            }
        }catch(err){
          setLoading(false)
            console.log(err)
            setError(err);

        }
    }

    useEffect(()=>{
        fetchUsersData();
    },[]);
    console.log(users)

    return(
       
            <div className="search-autocomplete-container">
              <input
                name="search-users"
                placeholder="Search Users here..."
                value={searchParam}
                onChange={()=>(handleChange(      ))}
                
                
              />
            </div>
          
          
        
    )
}