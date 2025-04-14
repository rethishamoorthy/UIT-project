/*import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const userEmail = JSON.parse(localStorage.getItem("user"))?.email;

  useEffect(() => {
    const savedUserForms = JSON.parse(localStorage.getItem("userForms")) || {};
    if (userEmail && savedUserForms[userEmail]) {
      const data = savedUserForms[userEmail];
      setName(data.name || '');
      setAge(data.age || '');
      setGender(data.gender || '');
      setCity(data.city || '');
      setPhone(data.phone || '');
      setIsFormSubmitted(true);
    }
  }, [userEmail]);

  const handleSubmit = () => {
    const userDetails = { name, age, gender, city, phone };

    const allUserForms = JSON.parse(localStorage.getItem("userForms")) || {};
    allUserForms[userEmail] = userDetails;
    localStorage.setItem("userForms", JSON.stringify(allUserForms));

    setIsFormSubmitted(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // Go to home page
    window.location.reload();   // Refresh the whole website
  };

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm">
      <h2>Profile Page</h2>
      {isFormSubmitted ? (
        <div>
          <h4>User Details</h4>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <button onClick={handleSignOut} className="btn btn-danger mt-3">Sign Out</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
          <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /><br />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
          <button onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;*/






import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userEmail = user?.email;

  useEffect(() => {
    const savedUserForms = JSON.parse(localStorage.getItem("userForms")) || {};
    if (userEmail && savedUserForms[userEmail]) {
      const data = savedUserForms[userEmail];
      setName(data.name || '');
      setAge(data.age || '');
      setGender(data.gender || '');
      setCity(data.city || '');
      setPhone(data.phone || '');
      setIsFormSubmitted(true);
    }
  }, [userEmail]);

  const handleSubmit = () => {
    const userDetails = { name, age, gender, city, phone };
    const allUserForms = JSON.parse(localStorage.getItem("userForms")) || {};
    allUserForms[userEmail] = userDetails;
    localStorage.setItem("userForms", JSON.stringify(allUserForms));
    setIsFormSubmitted(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // Go to front page
    window.location.reload();   // Refresh entire site
  };

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm text-center">
      <h2>Profile Page</h2>

      {/* Profile Picture */}
      <img
        src="pet.jpg" // Replace with user-specific image if needed
        alt="Profile"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '15px',
          border: '2px solid #ccc'
        }}
      />

      {/* Show user email */}
      {userEmail && <p><strong>Email:</strong> {userEmail}</p>}

      {/* Display Form or Submitted Details */}
      {isFormSubmitted ? (
        <div>
          <h4>User Details</h4>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <button onClick={handleSignOut} className="btn btn-danger mt-3">Sign Out</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
          <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br />
          <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /><br />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
          <button onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

