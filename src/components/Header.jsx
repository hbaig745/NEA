import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import "./Header.css";

function Header({ loggedIn, navigation}) {
  const loggedInlocal = loggedIn;

  return (
    <div id="header">
      <div id="button-div">

      <button onClick={navigation} id='menu-button' ><img src="./favicon.ico" alt="" /></button>
      </div>
      <div id="title-div">

      <h1 id="title"><Link to='/' id="h1-link">Fitness Factory</Link></h1>
      </div>
      <div id="log-in-button">

      {loggedInlocal ? (
        <Link to="/profile" id="button-text">
          <button id="button">PROFILE</button>
        </Link>
      ) : (
        
        <Link to='/log-in' id="button-text"><button id="button">LOG IN</button></Link>
        
        )}
        </div>
    </div>
  );
}

export default Header;
