import { Link } from "react-router-dom";
import data from "../../../data/data.json";

const HostVans = () => {
  console.log(data);

  return (
    <>
      {data.map((van) => (
        <div className="my-4" key={van.id}>
          <Link to={`/host/vans/${van.id}`}>{van.name}</Link>
        </div>
      ))}
    </>
  );
};

export default HostVans;
