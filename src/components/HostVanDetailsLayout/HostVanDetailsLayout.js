import { Outlet, Link, useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ params }) => {
  await requireAuth();
  return getVans(params.id);
};

const HostVanDetailsLayout = () => {
  const van = useLoaderData();

  return (
    <>
      <Link className="my-2" to=".." relative="path">
        <Button>Back to vans</Button>
      </Link>
      <h1>{van.name}</h1>
      <nav className="d-flex justify-content-around">
        <Link to=".">Details</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="photos">Photos</Link>
      </nav>
      <Outlet context={{ van }} />
    </>
  );
};

export default HostVanDetailsLayout;
