import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  const [userDetails, changeUserDetails] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNav, setIsNav] = useState(false);

  function navigation() {
    if (isNav) {
      closeNav();
      setIsNav(false);
    } else {
      openNav();
      setIsNav(true);
    }
  }

  function checkNav() {
    if (isNav) {
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("navigation").style.width = "15%";
    document.getElementById("main").style.width = "85%";
    document.getElementById("main").style.marginLeft = "15%";
  }

  function closeNav() {
    document.getElementById("navigation").style.width = "0%";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0%";
  }
  return (
    <div id="container">
      <Router>
        <Header loggedIn={loggedIn} navigation={navigation} />
        <div>
          <Nav loggedIn={loggedIn} />
          <AnimatedRoutes
            checkNav={checkNav}
            setLoggedIn={setLoggedIn}
            userDetails={userDetails}
            changeUserDetails={changeUserDetails}
            loggedIn={loggedIn}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
