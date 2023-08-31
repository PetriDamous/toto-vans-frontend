import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return getVans();
};

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <>
      {vans.map((van) => (
        <div className="my-4" key={van.id}>
          <Link to={`${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </>
  );
};

export default HostVans;
