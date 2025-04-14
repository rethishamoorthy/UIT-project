/*import React from 'react';

const AdminUserDetails = () => {
  const allUserForms = JSON.parse(localStorage.getItem('userForms')) || {};

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm">
      <h2>Admin - All User Details</h2>
      {Object.entries(allUserForms).length === 0 ? (
        <p>No users found.</p>
      ) : (
        Object.entries(allUserForms).map(([email, data]) => (
          <div key={email} style={{ borderBottom: '1px solid #ccc', marginBottom: '15px', paddingBottom: '10px' }}>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminUserDetails;*/





import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminUserDetails = () => {
  const navigate = useNavigate(); // Initialize navigation
  const allUserForms = JSON.parse(localStorage.getItem('userForms')) || {};

  // Event handler for navigation
  const goToCalculator = () => {
    navigate('/calculator'); // Change '/calculator' to your calculator route
  };

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm">
      <h2>Admin - All User Details</h2>
      {Object.entries(allUserForms).length === 0 ? (
        <p>No users found.</p>
      ) : (
        Object.entries(allUserForms).map(([email, data]) => (
          <div key={email} style={{ borderBottom: '1px solid #ccc', marginBottom: '15px', paddingBottom: '10px' }}>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
            <p><strong>City:</strong> {data.city}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
          </div>
        ))
      )}
      {/* Go to Calculator Button */}
      <button className="btn btn-primary mt-3" onClick={goToCalculator}>
        Go to Calculator
      </button>
    </div>
  );
};

export default AdminUserDetails;

