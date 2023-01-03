import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import "./Header.css";

function Header({ loggedIn, changeLoggedIn }) {
  const loggedInlocal = loggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isNav, setIsNav] = useState(false);

  function navigation() {
    if (isNav) {
      closeNav();
      setIsNav(false)
    } else {
      openNav();
      setIsNav(true)
    }
  }
  
  function openNav() {
    document.getElementById('navigation').style.width = '15%';
    document.getElementById('main').style.width = '85%';
  }
  
  function closeNav() {
    document.getElementById('navigation').style.width = '0%';
    document.getElementById('main').style.width = '100%';
  }

  return (
    <div id="header">
      <button onClick={navigation} ><img src="./favicon.ico" alt="" /></button>
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
