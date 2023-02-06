import "./pages.css";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from 'framer-motion';
import './login.css'

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
      document.getElementById("login_error_message").innerHTML =
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
    
    axios.post("https://hbaig745.pythonanywhere.com/user?data=" + JSON.stringify(data)).then(() => {
      setLoggedIn(true)
      changeUserDetails({username: username, password: password})
      navigate('/');
    })
      .catch(function (error) {
      document.getElementById("login_error_message").innerHTML =
        "Username is already taken";
    }) 

  }

  function goLogIn() {
    navigate("/log-in");
  }

  return (
    <motion.div id="main" initial={{ opacity: 0, transition: '1s' }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: '1s' }}>
      <div id="box">
        <div class='login-box' id="register-box">

      <div class="entries"id="register-entries">
        <p id="login-text">Email</p>
        <input type="text" placeholder="Enter email" id="email" class='login-inputs'/>
      </div>

      <div class="entries"id="register-entries">
      <p id="login-text">Password</p>
        <input type="password" placeholder="Enter password" id="password" class='login-inputs'/>
      </div>

      <div class="entries"id="register-entries">
      <p id="login-text">Username</p>
        <input type="text" placeholder="Enter username" id="username" class='login-inputs'/>
      </div>

      <div class="entries"id="register-entries">
      <p id="login-text">Name</p>
        <input type="text" placeholder="Enter name" id="name" class='login-inputs'/>
      </div>

      <div class="entries" id="register-entries">
      <p id="login-text">Phone Number</p>
        <input type="integer" placeholder="Enter Phone Number" id="phoneNumber" class='login-inputs'/>
      </div>
          <div id="h2-div">
            
      <h2 id="login_error_message"></h2>
          </div>
          <div id="login-button-div">

      <button onClick={submit} id='login-buttons'>Submit</button>
      <button onClick={goLogIn} id='login-buttons'>Log in</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Register;
