import React from 'react';
import './UserCard.css'; 

const UserCard = ({ name, surname, email }) => {
  return (
    <div className="user-card">
      <h2>{name} {surname}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;