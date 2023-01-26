import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {

  const [users, setUser] = useState([]);
  const loadUsers = async()=>
  {
    // console.log('Loading users');
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUser(jsonResponse);
  };



  return(
      <>
      <div className='App'>
        <h1>🎆USERS🎇</h1>
        <button onClick={loadUsers}>load users</button>
        <ul>
        <h2>users:- </h2>
          {users.map(({id, login, followers_url})=> (
            <li key={id}>
            username :-{login}{<br></br>}
           follower-url :- {followers_url}
            </li>
          ))}
          <br></br>
        </ul>
      </div>
      </>
  );
}

export default App;