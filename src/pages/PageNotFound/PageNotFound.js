import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Container>
      <section className="d-flex flex-column align-items-center justify-content-center">
        <h1>Page not found</h1>
        <Link to="/">
          <Button>Click here to return to home</Button>
        </Link>
      </section>
    </Container>
  );
};

export default PageNotFound;
