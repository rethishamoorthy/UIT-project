




/*import React, { useState } from 'react';

const PlasticCalculator = () => {
  const [username, setUsername] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [carbonSaved, setCarbonSaved] = useState('');

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);

    if (!username || isNaN(weightNum) || weightNum <= 0) {
      setMessage('Please enter a valid name and weight in kg.');
      setAmount('');
      setCarbonSaved('');
      return;
    }

    const reward = weightNum * 10; 
    const carbon = weightNum * 2;  

    setMessage(`${username}, you have contributed ${weightNum} kg of plastic waste.`);
    setAmount(`You will receive ₹${reward.toFixed(2)}`);
    setCarbonSaved(`Estimated Carbon Reduction: ${carbon.toFixed(2)} kg CO₂e`);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial'
    }}>
      <h2 style={{ color: 'black' }}>Plastic Waste Calculator</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', width: '100%', margin: '10px 0' }}
      />

      <input
        type="number"
        placeholder="Enter plastic weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 20px',
          width: '100%',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Calculate
      </button>

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
      {amount && <p>{amount}</p>}
      {carbonSaved && <p>{carbonSaved}</p>}
    </div>
  );
};

export default PlasticCalculator;*/





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Added for navigation

const PlasticCalculator = () => {
  const [username, setUsername] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');
  const [carbonSaved, setCarbonSaved] = useState('');

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);

    if (!username || isNaN(weightNum) || weightNum <= 0) {
      setMessage('Please enter a valid name and weight in kg.');
      setAmount('');
      setCarbonSaved('');
      return;
    }

    const reward = weightNum * 10; 
    const carbon = weightNum * 2;  

    setMessage(`${username}, you have contributed ${weightNum} kg of plastic waste.`);
    setAmount(`You will receive ₹${reward.toFixed(2)}`);
    setCarbonSaved(`Estimated Carbon Reduction: ${carbon.toFixed(2)} kg CO₂e`);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontFamily: 'Arial'
    }}>
      <h2 style={{ color: 'black' }}>Plastic Waste Calculator</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', width: '100%', margin: '10px 0' }}
      />

      <input
        type="number"
        placeholder="Enter plastic weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 20px',
          width: '100%',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Calculate
      </button>

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
      {amount && <p>{amount}</p>}
      {carbonSaved && <p>{carbonSaved}</p>}

      {/* ✅ Admin Button */}
      <button
        onClick={() => navigate('/Admin')}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          width: '100%',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Admin - User Membership
      </button>
    </div>
  );
};

export default PlasticCalculator;
