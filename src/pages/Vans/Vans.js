import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import data from "../../data/data.json";

const Vans = () => {
  const [vans, setVans] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  console.log(typeFilter);

  useEffect(() => {
    setVans(data);
  }, []);

  if (!vans) return "loading...";

  return (
    <Container>
      <Row>
        {vans.map((van) => (
          <Col key={van.id} md={6}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={`${van.imageUrl}`} />
              <Card.Body>
                <Card.Title>{van.name}</Card.Title>
                <Card.Text>{van.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Vans;
