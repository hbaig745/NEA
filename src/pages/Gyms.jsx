import { useEffect, useState } from "react";
import "./pages.css";

function Gyms({ navigation }) {
  const [initalData, setData] = useState([{}]);
  useEffect(() => {
    navigation();
  }, []);

  useEffect(() => {
    fetch("/members")
      .then((res) => res)
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div id="main">
      <p>{initalData.members}</p>
    </div>
  );
}

export default Gyms;
