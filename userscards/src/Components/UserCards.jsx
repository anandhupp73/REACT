import React from "react";
import "./UserCards.css";

class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null, // store clicked user
    };
  }

  componentDidMount() {
    fetch("/usersdetails.json")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.error("Error fetching users:", error));
  }

  handleUserClick = (user) => {
    this.setState({ selectedUser: user });
  };

  render() {
    return (
      <div>
        <div className="user-cards-container">
          {this.state.users.map((user) => (
            <div
              key={user.id}
              className="user-card"
              onClick={() => this.handleUserClick(user)}
              style={{ cursor: "pointer" }}
            >
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>

        {this.state.selectedUser && (
          <div className="user-details">
            <h2>User Details</h2>
            <p><strong>Name:</strong> {this.state.selectedUser.name}</p>
            <p><strong>Age:</strong> {this.state.selectedUser.age}</p>
            <p><strong>Email:</strong> {this.state.selectedUser.email}</p>
            <p><strong>Country:</strong> {this.state.selectedUser.country}</p>
          </div>
        )}
      </div>
    );
  }
}

export default UserCards;
