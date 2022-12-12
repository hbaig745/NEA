import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import LogInModal from "./LogInModal";
import RegisterModal from "./RegisterModal";

function Header({ loggedIn, changeLoggedIn }) {
  const loggedInlocal = loggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <div>
      <h1>Fitness Factory</h1>
      {loggedInlocal ? (
        <Link to='/profile'><button>Profile</button></Link>
      ) : (
        <div>
          <button onClick={() => setIsOpen(true)}>Log In</button>

          <button onClick={() => setIsRegisterOpen(true)}>register</button>
          {isOpen && <LogInModal setIsOpen={setIsOpen} />}
          {isRegisterOpen && (
            <RegisterModal setIsRegisterOpen={setIsRegisterOpen} />
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
