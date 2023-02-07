import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({loggedIn}) {
  const navigate = useNavigate();
  
  const classesFunction = () => {
    console.log(loggedIn)

    if (!loggedIn) {
      navigate('/log-in')
    } else {
      navigate('/book-classes')
    }
  }


  return (
    <nav id="navigation">
      <button id="nav-buttons" onClick={() => navigate("/")}>
        Home
      </button>
      <button id="nav-buttons" onClick={() => navigate("/local-gyms")}>
        Local Gyms
      </button>
      <button id="nav-buttons" onClick={classesFunction}>
        Book classes
      </button>
      <button id="nav-buttons" onClick={() => navigate("/contact")}>
        Contact
      </button>
      <a href="https://www.youtube.com/@PureGymVideo" target='_blank'>
        <button id="nav-buttons">YouTube</button>
      </a>
      <button id="nav-buttons" onClick={classesFunction}>
        View Classes
      </button>
    </nav>
  );
}

export default Nav;
