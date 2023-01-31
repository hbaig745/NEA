import { Link } from "react-router-dom";
import "./pages.css";
import { useEffect } from "react";
import { motion } from 'framer-motion';

function Profile({ setLoggedIn, userDetails, navigation }) {

  useEffect(() => {
    navigation()
  }, [])
  
  return (
    <motion.div id="main" initial={{ opacity:0, transition:'1s' }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: '1s'}}>
      <h1>Profile</h1>
      <h1>{userDetails.username}</h1>
      <Link to='/' onClick={() => setLoggedIn(false)}>log out</Link>
    </motion.div>
  );
}

export default Profile;
