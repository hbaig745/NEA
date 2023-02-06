import { useEffect, useState } from "react";
import "./pages.css";
import axios from "axios";
import { motion } from "framer-motion";
import "./Gyms.css";

function Gyms({ navigation }) {
  const [gymData, setGymData] = useState();

  useEffect(() => {
    navigation();
    axios
      .get("https://hbaig745.pythonanywhere.com/gym_info?gym=?" + document.getElementById("current_gym").value)
      .then((res) => {
        setGymData(JSON.stringify(res.data));
      });
  }, []);

  function find_gym() {
    axios
      .get(
        "https://hbaig745.pythonanywhere.com/closest_gym?current_gym=" +
          document.getElementById("current_gym").value
      )
      .then((res) => {
        document.getElementById("p").innerHTML = res.data;
      });
  }

  function gym_info() {
    var current_gym = document.getElementById("current_gym").value;

    document.getElementById("p").innerHTML = JSON.stringify(
      JSON.parse(gymData)[current_gym]
    );
  }

  return (
    <motion.div
      id="main"
      initial={{ opacity: 0, transition: "1s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: "1s" }}
    >
      <div id="box">
        <div id="picture-box" class="gym-boxes">
          <img src="https://hbaig745.pythonanywhere.com/gymgraph-picture" alt="" id="picture" />
        </div>
        <div class="gym-boxes" id="control-box">
          <div id="label-div">
            <label htmlFor="start_gym" id="login-text">
              Current Gym
            </label>
            <input
              type="text"
              maxLength={1}
              placeholder="Letter"
              id="current_gym"
              class="login-inputs"
            />
          </div>
          <div id="buttons-div">
            <button onClick={find_gym} id="gym-button">
              Find closest open gym
            </button>
            <button onClick={gym_info} id="gym-button">
              Get gym information
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Gyms;
