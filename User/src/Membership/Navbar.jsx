/*import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
     <div className="container">
        <Link className="navbar-brand" to="/">TrashCash</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <p className="nav-item">
              <Link className="nav-link" to="/">Form</Link>
            </p>
            <p className="nav-item">
              <Link className="nav-link" to="/User">User/Admin</Link>
            </p>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/



import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black  fixed-top p-3 shadow">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold fs-4" to="/">♻️TrashCash</Link>

        {/* Navbar Toggle Button for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/">Front</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/Profile">Profile</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/Signup">signup</Link>
            </li>
         <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/login">Login</Link>
            </li>
           <li className="nav-item">
              <Link className="nav-link text-white fs-5" to="/form">Form</Link>
            </li>
            
            <li className="nav-item">
              
              <Link className="nav-link text-white fs-5" to="/user">User</Link>
              
            </li>
            
          
             </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
