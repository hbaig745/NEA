import "./pages.css";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register({ navigation, setLoggedIn, changeUserDetails }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigation();
  }, []);

  function submit() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phoneNumber").value;

    if (email == '' || password == '' || username == '' || name == '' || phone == '') {
      document.getElementById("register_error_message").innerHTML =
        "Fill in all boxes";
      return
    }

    if (password.length < 8) {
      document.getElementById("register_error_message").innerHTML =
        "Password Must be at least 8 characters";
      return
    }

      var data = {
          'email': email,
          'password': password,
         'username': username,
          'name': name,
          'phone': phone
    }
    
    axios.post("/user?data=" + JSON.stringify(data)).then(() => {
      setLoggedIn(true)
      changeUserDetails({username: username, password: password})
      navigate('/');
    })
      .catch(function (error) {
      document.getElementById("register_error_message").innerHTML =
        "Username is already taken";
    }) 

  }

  function goLogIn() {
    navigate("/log-in");
  }

  return (
    <div id="main">
      <div>
        <label htmlFor="email">
          <b>email</b>
        </label>
        <input type="text" placeholder="Enter email" id="email"/>
      </div>

      <div>
        <label htmlFor="password">
          <b>password</b>
        </label>
        <input type="password" placeholder="Enter password" id="password" />
      </div>

      <div>
        <label htmlFor="username">
          <b>username</b>
        </label>
        <input type="text" placeholder="Enter username" id="username" />
      </div>

      <div>
        <label htmlFor="name">
          <b>name</b>
        </label>
        <input type="text" placeholder="Enter name" id="name" />
      </div>

      <div>
        <label htmlFor="phone number">
          <b>phone number</b>
        </label>
        <input type="integer" placeholder="Enter Phone Number" id="phoneNumber" />
      </div>

      <h1 id="register_error_message"></h1>
      <button onClick={submit}>submit</button>
      <button onClick={goLogIn}>log in</button>
    </div>
  );
}

export default Register;
