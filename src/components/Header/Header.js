import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isLoggedIn) {
      return navigate("/login");
    } else {
      localStorage.clear();
      navigate("/");
    }
  };

  return (
    <header className="d-flex justify-content-between">
      <nav className="d-sm-none fs-1">&#9776;</nav>
      <Link className="fs-1" to="/">
        #VANLIFE
      </Link>
      <nav className="d-none d-sm-flex d-md-flex">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Button onClick={handleLogin}>Login</Button>
      </nav>
    </header>
  );
};

export default Header;
