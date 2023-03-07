import React from 'react';
import "./UserP.css"

const UserProfile = ( user ) => {
  return (
    <div className="user-profile">
      <h2>Name :- {user.name}</h2>
      
      <div className='img'>

      <img src={user.avatar} alt="User Avatar" />


      </div>
      <p>Bio :- {user.bio}</p>
      <ul>
        <li>Email: {user.email}</li>
        <li>Location: {user.location}</li>
        <li>Website: <a href={user.website}>{user.website}</a></li>
      </ul>
    </div>
  );
};

export default UserProfile;