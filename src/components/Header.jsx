import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import "./Header.css";

function Header({ loggedIn, navigation}) {
  const loggedInlocal = loggedIn;

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
