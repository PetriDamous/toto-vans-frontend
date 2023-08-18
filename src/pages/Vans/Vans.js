import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import data from "../../data/data.json";

const Vans = () => {
  const [vans, setVans] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    setVans(data);
  }, []);

  if (!vans) return "loading...";

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <Container>
      <div className="mb-4">
        <Select setSearchParams={setSearchParams} />
      </div>
      <Row>
        {displayVans.map((van) => (
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

const Select = ({ setSearchParams }) => {
  const handleRadioChange = (e) => {
    const typeValue = e.target.labels[0].title;

    if (typeValue === "clear") {
      setSearchParams({});
      return;
    }

    setSearchParams({ type: typeValue });
  };

  const raidoCommonProps = {
    inline: true,
    type: "radio",
    name: "vanFilter",
    onChange: handleRadioChange,
  };

  const radioButtons = [
    {
      id: "simple-1",
      title: "simple",
      label: "Simple",
      ...raidoCommonProps,
    },
    {
      id: "luxury-1",
      title: "luxury",
      label: "Luxury",
      ...raidoCommonProps,
    },
    {
      id: "rugged-1",
      title: "rugged",
      label: "Rugged",
      ...raidoCommonProps,
    },
    {
      id: "clear-1",
      title: "clear",
      label: "Clear",
      ...raidoCommonProps,
    },
  ];

  return (
    <Form>
      {radioButtons.map((radioButton) => (
        <div key={`inline-${radioButton.id}`} className="mb-3">
          <Form.Check {...radioButton} />
        </div>
      ))}
    </Form>
  );
};

export default Vans;
