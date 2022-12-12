import Profile from "../pages/Profile";

function Header({ loggedIn, changeLoggedIn }) {
  return (
    <div>
      <h1>Fitness Factory</h1>
      {loggedIn ? (
        <a href="/profile">
          <button>Profile</button>
        </a>
      ) : (
        <a href="/log-in">
          <button>Log In</button>
        </a>
      )}
    </div>
  );
}

export default Header;
