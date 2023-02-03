import React from "react";
import Home from "./Home";
import Gyms from "./Gyms";
import Classes from "./Classes";
import Profile from "./Profile";
import LogIn from "./LogIn";
import Register from "./Register";
import Pc from './Pc'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function AnimatedRoutes({checkNav, changeUserDetails, setLoggedIn, userDetails}) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
        <Route path="/pc" element={<Pc />}>
        
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
