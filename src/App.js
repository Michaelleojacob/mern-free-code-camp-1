import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = function () {
  const [users, setUsers] = useState(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    axios
      .get('/api/users')
      .then((users) => {
        setUsers(users.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function submitForm() {
    if (username === '') {
      alert('Please fill the username field');
      return;
    }
    if (email === '') {
      alert('Please fill the email field');
      return;
    }
    axios
      .post('/api/users', {
        username: username,
        email: email,
      })
      .then(function () {
        alert('Account created successfully');
        // window.location.reload();
        window.location = '/';
      })
      .catch(function () {
        alert('Could not creat account. Please try again');
      });
  }
  return (
    <>
      <h1>My Project</h1>
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No user available</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {users !== null
              ? users.map((user, index) => (
                  <li key={index}>
                    Name: {user.username} - Email: {user.email}
                  </li>
                ))
              : ''}
          </ol>
        </>
      )}

      <form onSubmit={submitForm}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='text'
          placeholder='Enter your username'
          name='name'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          placeholder='Enter your email address'
          name='email'
        />
        <input type='submit' />
      </form>
    </>
  );
};
export default App;
