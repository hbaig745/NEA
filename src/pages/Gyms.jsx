import { useEffect, useState } from "react";
import "./pages.css";
import axios from "axios";
import { motion } from "framer-motion";
import "./Gyms.css";

function Gyms({ navigation }) {
  const [gymData, setGymData] = useState();

  useEffect(() => {
    navigation();
    show_graph();
    axios
      .get(
        "https://hbaig745.pythonanywhere.com/gym_info?gym=?" +
          document.getElementById("current_gym").value
      )
      .then((res) => {
        setGymData(JSON.stringify(res.data));
      });
  }, []);

  function show_graph() {
    document.getElementById("picture-box").innerHTML =
      '<img src="https://hbaig745.pythonanywhere.com/gymgraph-picture" alt="" id="picture" />';
  }

  function find_gym() {
    let letter = document.getElementById("current_gym").value.toUpperCase();
    console.log(letter)
    if (letter == "") {
      document.getElementById("picture-box").innerHTML =
      "Please enter a letter";
      document.getElementById("picture-box").style.color = "red";
      return;
    }
    if (!(letter == 'A' || letter == 'B' || letter == 'C' || letter == 'D' || letter == 'E' || letter == 'F' || letter == 'G') ){
      document.getElementById("picture-box").innerHTML =
      "Please enter a valid letter";
      document.getElementById("picture-box").style.color = "red";
      return;
    }

    document.getElementById("picture-box").style.color = "white";

    axios
      .get(
        "https://hbaig745.pythonanywhere.com/closest_gym?current_gym=" +
          letter
      )
      .then((res) => {
        document.getElementById("picture-box").innerHTML = res.data;
      });
  }

  function gym_info() {
    let letter = document.getElementById("current_gym").value.toUpperCase();
    if (letter == "") {
      document.getElementById("picture-box").innerHTML =
      "Please enter a letter";
      document.getElementById("picture-box").style.color = "red";
      return;
    }
    if (!(letter == 'A' || letter == 'B' || letter == 'C' || letter == 'D' || letter == 'E' || letter == 'F' || letter == 'G') ){
      document.getElementById("picture-box").innerHTML =
      "Please enter a valid letter";
      document.getElementById("picture-box").style.color = "red";
      return;
    }
    
    document.getElementById("picture-box").style.color = "white";
    var current_gym = letter;

    document.getElementById("picture-box").innerHTML = JSON.stringify(
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
        <div id="picture-box" class="gym-boxes"></div>
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
            <button onClick={show_graph} id="gym-button">
              Show Graph
            </button>
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
