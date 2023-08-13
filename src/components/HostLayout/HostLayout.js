import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <Container>
      <nav className="d-flex justify-content-between">
        <Link to="/host/dashboard">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </Container>
  );
};

export default HostLayout;
