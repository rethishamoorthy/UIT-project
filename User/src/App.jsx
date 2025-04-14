/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/


/*import React from 'react'
import User from '../src/User'
function App(){
return(
  <div>
    <User/>
  </div>
);
}
export default App;*/




/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./Membership/Admin";
import User from "./Membership/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
  );
}

export default App;
*/


/*import Membership  from "./Membership/Membership";
import Admin from "./Membership/Admin";
import User from "./Membership/User";

function App() {
  return (
    <Membership>
      <div className="App">
        <Admin />
        <User />
        <Membership/>
      </div>
    </Membership>
  );
}

export default App;*/



/*
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Membership/Front";
import Navbar from "./Membership/Navbar";  // Import Navbar
import Form from "./Membership/Form";
import User from "./Membership/User";
import Admin from "./Membership/Admin";
import Login from "./Membership/Login";
import Calculator from "./Membership/Calculator";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar should be here */
      /*<Routes>
      <Route path="/Front" element={<Front />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/login/Home" element={<LoginHome />} />
        <Route path="/form/Home" element={<FormHome />} />
        <Route path="/User/Home" element={<UserHome />} />
        <Route path="/Admin/Home" element={<Adminhome />} />
        <Route path="/calculator/Home" element={<CalculatorHome />} />
       
      </Routes>
    </Router>
  
  );
}

export default App;*/




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Front from "./Membership/Front";
import Profile from "./Membership/Profile";
import Adminlogin from "./Membership/Adminlogin";
import Signup from "./Membership/Signup";
import Home from "./Membership/Home";
import Navbar from "./Membership/Navbar";
import Form from "./Membership/Form";
import User from "./Membership/User";
import Admin from "./Membership/Admin";
import Login from "./Membership/Login";
import AdminUserdet from "./Membership/AdminUserdet";
import Calculator from "./Membership/Calculator";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Front page as default route */}
        <Route path="/" element={<Front />} />

        {/* Pages with Navbar */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
         <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />

<Route
          path="/AdminUserdet"
          element={
            <>
              <Navbar />
              <AdminUserdet />
            </>
          }
        />
        <Route

          path="/Adminlogin"
          element={
            <>
              <Navbar />
              <Adminlogin/>
            </>
          }
        />
         <Route
          path="/Signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              <Navbar />
              <User />
            </>
          }
        />
         <Route
          path="/Admin"
          element={
            <>
              <Navbar />
              <Admin />
            </>
          }
        />
       
        {/* Other routes */}
        <Route
          path="/form"
          element={
            <>
              <Navbar />
              <Form />
            </>
          }
        />
        <Route
          path="/calculator"
          element={
            <>
              <Navbar />
              <Calculator />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
