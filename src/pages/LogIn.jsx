import "./pages.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ changeLoggedIn, changeUserDetails, navigation }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigation()
  }, [])

  function submit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
      document.getElementById("login_error_message").innerHTML =
        "Please fill all boxes";
      return;
    }

    axios
      .get("/user?username=" + username + "&password=" + password)
      .then((res) => {
        console.log(res.data.data)
        if (res.data.data == true) {
          changeUserDetails({ username: username, password: password });
          changeLoggedIn(true);
          navigate("/");
        } else {
          document.getElementById("login_error_message").innerHTML =
            "Wrong username and password";
        }
      });
  }

  function goRegister() {
    navigate("/register");
  }

  return (
    <div id="main">
      <div>
        <label htmlFor="username">
          <b>email</b>
        </label>
        <input type="text" placeholder="Enter username" id="username" />
      </div>

      <div>
        <label htmlFor="password">
          <b>password</b>
        </label>
        <input type="password" placeholder="Enter password" id="password" />
      </div>
      <h1 id="login_error_message"></h1>
      <button onClick={submit}>submit</button>
      <button onClick={goRegister}>register</button>
    </div>
  );
}

export default LogIn;
