import { useEffect, useState } from "react";
import "./pages.css";

function Gyms() {
  const [initalData, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div id="main">
      <p>{ initalData.members}</p>
    </div>
  );
}

export default Gyms;