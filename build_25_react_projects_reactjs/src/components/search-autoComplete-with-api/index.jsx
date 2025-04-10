import { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";
import "./suggesstions.css";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleClick(event) {
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      // console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userData) => userData.firstName));
        console.log(users);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  // console.log(users, filteredUsers);

  return (
    <>
      <div className="search-autoComplete-container">
        {loading ? (
          <h1>Loading Data Please Wait...</h1>
        ) : (
          <input
            type="text"
            name="search-users"
            placeholder="Search Users here..."
            value={searchParam}
            onChange={handleChange}
          />
        )}

        {showDropdown && (
          <Suggesstions handleClick={handleClick} data={filteredUsers} />
        )}
      </div>
    </>
  );
}
