import { Link, useLocation, useLoaderData } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { getVans } from "../../api";

export const loader = ({ params }) => {
  return getVans(params.id);
};

const VanDetail = () => {
  const van = useLoaderData();
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
