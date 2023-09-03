import { Suspense } from "react";
import { Await, defer, Outlet, Link, useLoaderData } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return defer({ van: getVans(params.id) });
};

const HostVanDetailsLayout = () => {
  const dataPromise = useLoaderData();

  return (
    <section>
      <Link className="my-2" to=".." relative="path">
        <Button>Back to vans</Button>
      </Link>

      <Suspense fallback={"Loading..."}>
        <Await resolve={dataPromise.van}>
          {(van) => <VanDisplay van={van} />}
        </Await>
      </Suspense>
    </section>
  );
};

const VanDisplay = ({ van }) => {
  return (
    <>
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
