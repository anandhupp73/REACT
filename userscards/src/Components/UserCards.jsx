import React, { useEffect, useState } from "react";
import "./UserCards.css"

const UserCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/usersdetails.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-cards-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          {/* <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>Country: {user.country}</p> */}
        </div>
      ))}
    </div>
  );
};

export default UserCards;
