import "./pages.css";
import "./classes.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Classes({ navigation, loggedIn, userDetails }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigation();
    showClasses();
  }, []);

  function deleteClass() {
    if (!loggedIn) {
      navigate("/log-in");
      return;
    }

    var username = userDetails["username"];
    var valid = false;
    axios.get("https://hbaig745.pythonanywhere.com/classes").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i][0] == document.getElementById("current_class").value) {
          valid = true;
          break;
        }
      }

      if (valid) {
        axios.delete(
          "https://hbaig745.pythonanywhere.com/booked-classes?username=" +
            username +
            "&classID=" +
            document.getElementById("current_class").value
        );

        document.getElementById("class-box").innerHTML = "Class Cancelled!";
      } else {
        document.getElementById("class-box").innerHTML = "invalid";
      }
    });
  }

  function showBookedClasses() {
    if (!loggedIn) {
      navigate("/log-in");
      return;
    }
    axios
      .get(
        "https://hbaig745.pythonanywhere.com/booked-classes?username=" +
          userDetails["username"]
      )
      .then((res) => {
        document.getElementById("class-box").innerHTML = res.data;
        console.log(res.data);
      });
  }

  function showClasses() {
    document.getElementById("class-box").innerHTML = "";
    axios.get("https://hbaig745.pythonanywhere.com/classes").then((res) => {
      var table = document.createElement("table");
      var tableBody = document.createElement("tbody");
      var row = document.createElement("tr"); 

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("Class Number"));
      row.appendChild(cell);

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("Class Name"));
      row.appendChild(cell);

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("Day"));
      row.appendChild(cell);

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("Duration"));
      row.appendChild(cell);

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("Start time"));
      row.appendChild(cell);

      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode("End Time"));
      row.appendChild(cell);

      tableBody.appendChild(row);
      res.data.forEach(function (rowData) {
        var row = document.createElement("tr");

        rowData.forEach(function (cellData) {
          var cell = document.createElement("td");
          cell.appendChild(document.createTextNode(cellData));
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      });

      table.appendChild(tableBody);
      console.log(table);
      if (document.getElementById("class-box").innerHTML == "") {
        document.getElementById("class-box").append(table);
      }
    });
  }

  function bookClass() {
    if (!loggedIn) {
      navigate("/log-in");
      return;
    }

    var username = userDetails["username"];
    var valid = false;
    axios.get("https://hbaig745.pythonanywhere.com/classes").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i][0] == document.getElementById("current_class").value) {
          valid = true;
          break;
        }
      }

      if (valid) {
        axios.post(
          "https://hbaig745.pythonanywhere.com/classes?username=" +
            username +
            "&classID=" +
            document.getElementById("current_class").value
        );

        document.getElementById("class-box").innerHTML = "Class Booked!";
      } else {
        document.getElementById("class-box").innerHTML = "invalid";
      }
    });
  }

  return (
    <motion.div
      id="main"
      initial={{ opacity: 0, transition: "1s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: "1s" }}
    >
      <div id="box">
        <div id="class-box" class="gym-boxes"></div>
        <div class="gym-boxes" id="control-box">
          <div id="label-div">
            <label htmlFor="start_gym" id="login-text">
              Class
            </label>
            <input
              type="text"
              maxLength={2}
              placeholder="Number"
              id="current_class"
              class="login-inputs"
            />
          </div>
          <div id="buttons-div">
            <button onClick={showClasses} id="gym-button">
              Show Available classes
            </button>

            <button onClick={bookClass} id="gym-button">
              Book Class
            </button>
            <button onClick={deleteClass} id="gym-button">
              Unbook Class
            </button>
            <button onClick={showBookedClasses} id="gym-button">
              View Your Classes
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Classes;
