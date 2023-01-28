import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav id="navigation">
      <button id="nav-buttons">
        <Link to="/" id="button-text">Home</Link>
      </button>
      <button id="nav-buttons">
        <Link to="/local-gyms" id="button-text">Local Gyms</Link>
      </button>
      <button id="nav-buttons">
        <Link to="book-classes" id="button-text">Book classes</Link>
      </button >
      <button id="nav-buttons">
        <Link to="book-classes" id="button-text">Contact</Link>
      </button >
      <button id="nav-buttons">
        <a href="https://www.youtube.com/@PureGymVideo" target='_blank' id="button-text">YouTube</a>
      </button >
      <button id="nav-buttons">
        <Link to="book-classes" id="button-text">Book classes</Link>
      </button >
      <button id="nav-buttons">
        <Link to="book-classes" id="button-text">Book classes</Link>
      </button >
    </nav>
  );
}

export default Nav;
