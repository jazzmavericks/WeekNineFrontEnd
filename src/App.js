import { useState } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Listusers from './components/listusers';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="App">
      <div className="forms-container">
        <Register
          setEmail={setEmail}
          email={email}
          setPassword={setPassword}
          password={password}>  
        </Register>
        <Login
          setEmail={setEmail}
          email={email}
          setPassword={setPassword}
          password={password}>  
        </Login>
      </div>
      <div className="logoutSection">
      <Logout></Logout>
      </div>
      <div className="listUsersSection">
      <Listusers>

      </Listusers>
      </div>
    </div>
  );
}

export default App;