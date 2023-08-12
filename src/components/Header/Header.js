import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="d-flex justify-content-between">
      <nav className="d-sm-none fs-1">&#9776;</nav>
      <Link className="fs-1" to="/">
        #VANLIFE
      </Link>
      <nav className="d-none d-sm-flex d-md-flex">
        <Link to="/about">About</Link>
        <Link>Vans</Link>
      </nav>
    </header>
  );
};

export default Header;
