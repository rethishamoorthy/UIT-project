import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/Login");
  };

  return (
    
    <div className="container p-3 mt-4 border rounded shadow-sm">
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <br/><br/><br/>
        <label>Password:</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <br/><br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
