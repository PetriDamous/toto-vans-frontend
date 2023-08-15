import { Link } from "react-router-dom";
import data from "../../../data/data.json";

const HostVans = () => {
  return (
    <>
      {data.map((van) => (
        <div className="my-4" key={van.id}>
          <Link to={`${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </>
  );
};

export default HostVans;
