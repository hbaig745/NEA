import "./login.css";
import { Link } from "react-router-dom";

function LogIn({ changeLoggedIn }) {
  return (
    <div id="log">
      <div>
        <label htmlFor="email">
          <b>email</b>
        </label>
        <input type="text" placeholder="Enter email" name="email" />
      </div>

      <div>
        <label htmlFor="password">
          <b>password</b>
        </label>
        <input type="password" placeholder="Enter password" name="password" />
      </div>

      <Link to="/" onClick={() => changeLoggedIn(true)}>
        submit
      </Link>
    </div>
  );
}

export default LogIn;
