import React, { useState,useEffect } from 'react';
 //פונקציה שמציגה מ API
function GetGitHubUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data); // set users in state
      });
  }, []); 
  const a = users.map((users) =>
  <li>{users.login}</li>
   );
return (
  <ul>{a[0]}</ul>
);
  // empty array because we only run once
// return <div>{users.login}</div>
}
export default GetGitHubUsers;