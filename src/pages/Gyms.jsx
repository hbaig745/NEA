import { useEffect, useState } from "react";
import "./pages.css";

function Gyms() {
  const [initalData, setData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3005/members')
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
