import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../../data/data.json";

const HostVanDetailsLayout = () => {
  const { id } = useParams();

  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    const van = data.find((van) => van.id === id);
    setCurrentVan(van);
  }, [id]);

  if (!currentVan) return "loading...";

  return (
    <>
      <Link className="my-2" to=".." relative="path">
        <Button>Back to vans</Button>
      </Link>
      <h1>{currentVan.name}</h1>
      <nav className="d-flex justify-content-around">
        <Link to=".">Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photos">Photos</Link>
      </nav>
      <Outlet context={{ currentVan }} />
    </>
  );
};

export default HostVanDetailsLayout;
