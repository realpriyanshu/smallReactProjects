import { useEffect, useState } from "react"
import Suggestion from "./Suggestions";

export default function SearchAutoComplete() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState();
  const [filteredUsers, setFilteresdUsers] = useState();

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData = users && users.length ? users.filter((item) => item.toLowerCase().indexOf(query) > -1) : [];

      setFilteresdUsers(filteredData);
      setShowDropDown(true);
    }
    else {
      setShowDropDown(false);
    }
  }

  async function fetchUsersData() {
    try {
      const res = await fetch("https://dummyjson.com/users?limit=30");
      const data = await res.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((item) => item.firstName))
        setLoading(false);
        setError(null)

      }
    } catch (err) {
      setLoading(false)
      console.log(err)
      setError(err);

    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);
  console.log(filteredUsers)
  console.log(users)

  return (
    <>
    {loading?(<div ><h1> Loading...</h1></div>
       
    ):(<div style={
      {
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

      }
    } className="search-autocomplete-container">
      <input style={{
        marginBottom: "30px",

      }}
        name="search-users"
        placeholder="Search Users here..."
        value={searchParam}
        onChange={(e) => (handleChange(e))}
      />
      {showDropDown ? <Suggestion userNames={filteredUsers} /> : null}
    </div>)}
    </>
    

   



  )
}