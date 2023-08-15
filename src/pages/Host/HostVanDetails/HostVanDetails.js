import { useParams } from "react-router-dom";
import data from "../../../data/data.json";

const HostVanDetails = () => {
  const { id } = useParams();

  const van = data.find((van) => van.id === id);

  return (
    <>
      <h1>{van.name}</h1>
      <h2>Price: {van.price}</h2>
      <p>Catergory: {van.type}</p>
      <p>Description: {van.description}</p>
    </>
  );
};

export default HostVanDetails;
