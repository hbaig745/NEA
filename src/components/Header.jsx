import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import "./Header.css";

function Header({ loggedIn, changeLoggedIn }) {
  const loggedInlocal = loggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div id="header">
      <img src="./favicon.ico" alt="" />
      <h1 id="title">Fitness Factory</h1>
      {loggedInlocal ? (
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      ) : (

          <Link to='/log-in'>log in</Link>
  
      )}
    </div>
  );
}

export default Header;
