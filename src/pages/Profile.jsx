import { Link } from "react-router-dom";
import "./pages.css";
import { useEffect } from "react";

function Profile({ setLoggedIn, userDetails, navigation }) {

  useEffect(() => {
    navigation()
  }, [])
  
  return (
    <div id="main">
      <h1>Profile</h1>
      <h1>{userDetails.username}</h1>
      <Link to='/' onClick={() => setLoggedIn(false)}>log out</Link>
    </div>
  );
}

export default Profile;
