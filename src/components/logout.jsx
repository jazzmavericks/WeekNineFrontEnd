import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

  