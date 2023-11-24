import React from 'react';

function Logout(props) {
    function logoutfunc(setLoggedIn, setUserList, setEmail, setRegistered) {
        try {
            document.cookie = "jwt_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";  
            setLoggedIn(false);
            setRegistered(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");   
        } catch (error) {
            console.log(error);
        }
    }
  function handleLogout(event) {
    logoutfunc(props.setLoggedIn, props.setUserList, props.setEmail, props.setRegistered)
  };

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

  