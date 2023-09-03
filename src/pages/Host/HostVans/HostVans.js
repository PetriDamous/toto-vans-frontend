import { Suspense } from "react";
import { Await, defer, Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getVans() });
};

const HostVans = () => {
  const dataPromise = useLoaderData();

  return (
    <Suspense fallback={"Loading..."}>
      <Await resolve={dataPromise.vans}>
        {(vans) => <HostVansDisplay vans={vans} />}
      </Await>
    </Suspense>
  );
};

const HostVansDisplay = ({ vans }) => {
  return (
    <section>
      {vans.map((van) => (
        <div className="my-4" key={van.id}>
          <Link to={`${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </section>
  );
};

export default HostVans;
