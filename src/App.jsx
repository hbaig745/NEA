import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Gyms from "./pages/Gyms";
import Classes from "./pages/Classes";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/local-gyms"
            element={<Gyms />}
          ></Route>
          <Route path="/book-classes" element={<Classes />}></Route>
          <Route
            path="/profile"
            element={<Profile setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/log-in"
            element={<LogIn changeLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
