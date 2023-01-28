import { useEffect, useState } from "react";
import "./pages.css";
import axios from "axios";

function Gyms({ navigation }) {
  const [gymData, setGymData] = useState();
  
  useEffect(() => {
    navigation();
    axios.get('gym_info?gym=?' + document.getElementById('current_gym').value).then((res) => {
      setGymData(JSON.stringify(res.data));
    })
  }, [])

    function find_gym() {
      axios.get('/closest_gym?current_gym=' + document.getElementById('current_gym').value).then(
        (res) => {
          document.getElementById('p').innerHTML = res.data;
        }
      )
    }

  function gym_info() {
    var current_gym = document.getElementById('current_gym').value;

    document.getElementById('p').innerHTML = JSON.stringify(JSON.parse(gymData)[current_gym]);
    }

    return (
      <div id="main">
        <p id="p">{gymData}</p>
        <div>
          <label htmlFor="start_gym">Current Gym</label>
          <input type="text" maxLength={1} placeholder='Letter' id="current_gym" />
        </div>
      
        <button onClick={find_gym}>Find closest open gym</button>
        <button onClick={gym_info}>Get gym information</button>
      </div>
    );
  }


export default Gyms;
