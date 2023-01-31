import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav id="navigation">
      <button id="nav-buttons" onClick={() => navigate("/")}>
        Home
      </button>
      <button id="nav-buttons" onClick={() => navigate("/local-gyms")}>
        Local Gyms
      </button>
      <button id="nav-buttons" onClick={() => navigate("/book-classes")}>
        Book classes
      </button>
      <button id="nav-buttons" onClick={() => navigate("/book-classes")}>
        Contact
      </button>
      <a href="https://www.youtube.com/@PureGymVideo" target='_blank'>
        <button id="nav-buttons">YouTube</button>
      </a>
      <button id="nav-buttons" onClick={() => navigate("/book-classes")}>
        Book classes
      </button>
    </nav>
  );
}

export default Nav;
