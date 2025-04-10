/*import { useState, useEffect } from 'react';

function User() {
  const [userMembers, setUserMembers] = useState([]);

  useEffect(() => {
    const loadMembers = () => {
      const storedMembers = JSON.parse(localStorage.getItem('userMembers')) || [];
      setUserMembers(storedMembers);
    };
  
    loadMembers(); // Load initially
  
    // Listen for updates in localStorage
    window.addEventListener("storage", loadMembers);
  
    return () => {
      window.removeEventListener("storage", loadMembers);
    };
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-500 mb-4">User - Membership Board</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Rank</th>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Name</th>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Plastic Collected (kg)</th>
          </tr>
        </thead>
        <tbody>
          {userMembers
            .sort((a, b) => b.kg - a.kg)
            .map((member, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{member.name}</td>
                <td className="border border-gray-300 p-2">{member.kg} kg</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default User;*/



import { useState, useEffect } from "react";

function User() {
  const [userMembers, setUserMembers] = useState([]);

  useEffect(() => {
    const loadMembers = () => {
      const storedMembers = JSON.parse(localStorage.getItem('userMembers')) || [];
      setUserMembers(storedMembers);
    };

    loadMembers(); // Initial load

    // Polling every 1 second for changes
    const interval = setInterval(loadMembers, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container p-3 mt-4 border rounded shadow-sm">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-500 mb-4">User - Membership Board</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Rank</th>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Name</th>
            <th className="border border-gray-300 p-2 bg-green-500 text-white">Plastic Collected (kg)</th>
          </tr>
        </thead>
        <tbody>
          {userMembers
            .sort((a, b) => b.kg - a.kg)
            .map((member, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{member.name}</td>
                <td className="border border-gray-300 p-2">{member.kg} kg</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default User;
