import { Link } from "react-router-dom";
import "./pages.css";

function Profile({setLoggedIn}) {
  return (
    <div id="main">
      <h1>Profile</h1>
      <Link to='/' onClick={() => setLoggedIn(false)}>log out</Link>
    </div>
  );
}

export default Profile;
