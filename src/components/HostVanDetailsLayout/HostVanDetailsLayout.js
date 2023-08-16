import { Outlet, Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../../data/data.json";

const HostVanDetailsLayout = () => {
  const { id } = useParams();

  const van = data.find((van) => van.id === id);

  return (
    <>
      <Link className="my-2" to=".." relative="path">
        <Button>Back to vans</Button>
      </Link>
      <h1>{van.name}</h1>
      <div className="d-flex justify-content-around">
        <Link to=".">Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photos">Photos</Link>
      </div>
      <Outlet />
    </>
  );
};

export default HostVanDetailsLayout;
