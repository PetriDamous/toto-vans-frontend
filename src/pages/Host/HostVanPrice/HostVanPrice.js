import { useParams } from "react-router-dom";
import data from "../../../data/data.json";

const HostVanPrice = () => {
  const { id } = useParams();

  const van = data.find((van) => van.id === id);

  return (
    <>
      <p>Price: {van.price}</p>
    </>
  );
};

export default HostVanPrice;
