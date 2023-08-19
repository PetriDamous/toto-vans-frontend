import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import data from "../../data/data.json";

const VanDetail = () => {
  const [van, setVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const van = data.find((van) => van.id === id);

    setVan(van);
  }, []);

  if (!van) return "Loading....";

  return (
    <>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <Image width={600} height={600} src={van.imageUrl} rounded />
      <h1>{van.name}</h1>
      <h2>Cost: {van.price}</h2>
      <p>{van.description}</p>
    </>
  );
};

export default VanDetail;
