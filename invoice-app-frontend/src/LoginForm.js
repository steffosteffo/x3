import React, { useState } from 'react';

function LoginForm({ onLogin, sumUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // List of valid users
    const validUsers = [
      { username: 'a', password: 'a' },
      { username: 'Martin', password: 'Martin' },
      { username: 'c', password: 'c' }
    ];

    // Check if the provided username and password match any user in the list
    const user = validUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user && sumUser > 0) {
      onLogin(username);  // Pass the username to the onLogin function
    } else {
      alert('Invalid credentials or a user is already logged in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>
          Användarnamn:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Lösenord:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Logga in</button>
    </form>
  );
}

export default LoginForm;
