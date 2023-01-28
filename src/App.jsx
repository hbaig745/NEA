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
import Home from "./pages/Home";
import Gyms from "./pages/Gyms";
import Classes from "./pages/Classes";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  const [userDetails, changeUserDetails] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isNav, setIsNav] = useState(false);

  function navigation() {
    if (isNav) {
      closeNav();
      setIsNav(false);
      console.log('closing')
    } else {
      openNav();
      setIsNav(true);
      console.log('opening')
    }
  }

  function checkNav() {
    if (isNav) {
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("navigation").style.width = "15%";
    document.getElementById("main").style.marginLeft = "15%";
  }

  function closeNav() {
    document.getElementById("navigation").style.width = "0%";
    document.getElementById("main").style.marginLeft = "0%";

  }

  return (
    <div id="container">
      <Router>
        <Header loggedIn={loggedIn} navigation={navigation} />
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home navigation={checkNav} />}></Route>
            <Route
              path="/local-gyms"
              element={<Gyms navigation={checkNav} />}
            ></Route>
            <Route
              path="/book-classes"
              element={<Classes navigation={checkNav} />}
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  setLoggedIn={setLoggedIn}
                  userDetails={userDetails}
                  navigation={checkNav}
                />
              }
            ></Route>
            <Route
              path="/log-in"
              element={
                <LogIn
                  changeLoggedIn={setLoggedIn}
                  changeUserDetails={changeUserDetails}
                  navigation={checkNav}
                />
              }
            ></Route>
            <Route
              path="/register"
              element={
                <Register
                  navigation={checkNav}
                  setLoggedIn={setLoggedIn}
                  changeUserDetails={changeUserDetails}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
