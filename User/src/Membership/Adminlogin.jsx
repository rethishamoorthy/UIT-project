import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ initialize navigate here

  // Hardcoded users
  const users = [
    { username: 'rithisha', password: 'rithi123' },
    { username: 'user', password: 'password' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      setMessage('Login successful');
      navigate('/AdminUserdet'); // ✅ Redirect to Admin page only on success
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '8px',
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Login
        </button>
      </form>

      <p
        style={{
          marginTop: '20px',
          color: message === 'Login successful' ? 'green' : 'red',
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default App;
