import { useParams } from "react-router-dom";
import data from "../../../data/data.json";

const HostVanDetails = () => {
  const { id } = useParams();

  const van = data.find((van) => van.id === id);

  return (
    <>
      <p>Catergory: {van.type}</p>
      <p>Description: {van.description}</p>
    </>
  );
};

export default HostVanDetails;
