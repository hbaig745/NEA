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

function App() {
  const { loggedIn, changeLoggedIn } = useState(true);

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} changeLoggedIn={changeLoggedIn} />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/local-gyms" element={<Gyms />}></Route>
          <Route path="/book-classes" element={<Classes />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
