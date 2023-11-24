import { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Listusers from './components/listusers';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [userList, setUserList] = useState([]);

  return (
    <div className="App">
      {!loggedIn && <div className="forms-container">
          {!loggedIn && <Register
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}>  
            setLoggedIn={setLoggedIn}
          </Register>}
          {!loggedIn && <Login
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            setLoggedIn={setLoggedIn}>  
          </Login>}
      </div>}
      <div className="listUsersSection">
        {loggedIn ? <Listusers
            setUserList={setUserList}
            userList={userList}>
        </Listusers> : <h3>Login to view a full list of registered users</h3>}
      </div>
      <div className="logoutSection">
        {loggedIn ? <Logout
          setLoggedIn={setLoggedIn}
          setUserList={setUserList}
          setEmail={setEmail}>
        </Logout> : <h3></h3>}
      </div>
    </div>
  );
}

export default App;