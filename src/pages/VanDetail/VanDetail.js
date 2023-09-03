import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLocation,
  useLoaderData,
} from "react-router-dom";
import Image from "react-bootstrap/Image";
import { getVans } from "../../api";

export const loader = async ({ params }) => defer({ van: getVans(params.id) });

const VanDetail = () => {
  const dataPromise = useLoaderData();

  return (
    <Suspense fallback={"Loading....."}>
      <Await resolve={dataPromise.van}>
        {(van) => <VanDetailDisplay van={van} />}
      </Await>
    </Suspense>
  );
};

const VanDetailDisplay = ({ van }) => {
  const location = useLocation();

  const search = location.state?.search || "";
  const backTxt = location.state?.type || "all";

  return (
    <>
      <Link to={`..?${search}`} relative="path" className="back-button">
        &larr; <span>Back to {backTxt} vans</span>
      </Link>
      <Image width={600} height={600} src={van.imageUrl} rounded />
      <h1>{van.name}</h1>
      <h2>Cost: {van.price}</h2>
      <p>{van.description}</p>
    </>
  );
};

export default VanDetail;
