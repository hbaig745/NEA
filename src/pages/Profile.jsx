import { Link, Navigate, useNavigate } from "react-router-dom";
import "./pages.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./profile.css";

function Profile({ setLoggedIn, userDetails, navigation }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigation();
    console.log(userDetails);
    document.getElementById("profile-username").innerHTML =
      userDetails.username;
    document.getElementById("profile-name").innerHTML = userDetails.name;
    document.getElementById("profile-email").innerHTML = userDetails.email;
    document.getElementById("profile-number").innerHTML = userDetails.number;
  }, []);

  function logOut() {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <motion.div
      id="main"
      initial={{ opacity: 0, transition: "1s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: "1s" }}
    >
      <div id="box">
        <div class="contact-box" id="for-profile">
          <div class="profile-box">
            <div id="text-div">
              <p class="contact-text">Username</p>
              <p class="contact-text">Name</p>
              <p class="contact-text">Email</p>
              <p class="contact-text">Phone Number</p>
            </div>
            <div id="info-div">
              <p class="contact-contact" id="profile-username"></p>
              <p class="contact-contact" id="profile-name"></p>
              <p class="contact-contact" id="profile-email"></p>
              <p class="contact-contact" id="profile-number"></p>
            </div>
          </div>
          <div id="profile-button-div">
            <button id="profile-button" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
