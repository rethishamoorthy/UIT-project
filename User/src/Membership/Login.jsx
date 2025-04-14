import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

   if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/form"); 
   } else {
     alert("Invalid email or password");
    }
  };

  return (
    
    <div className="container p-3 mt-4 border rounded shadow-sm">
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <labrl>Email:</labrl>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <br/><br/><br/>
        <label>Password:</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <br/><br/>
       
         
       
        <button type="submit">Login
       
       
      </button>
      </form>
    </div>
    </div>
  
  );
};

export default LoginPage;





