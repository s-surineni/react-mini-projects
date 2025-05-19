import React, { useState } from 'react';

function UsernameInput() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <label htmlFor="username-input">Username:</label>
      <input
        id="username-input"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <div style={{ marginTop: '8px', color: '#555' }}>
        Current value: <strong>{username}</strong>
      </div>
    </div>
  );
}

export default UsernameInput; 