import { useParams } from "react-router-dom";
import data from "../../../data/data.json";

const HostVanPhotos = () => {
  const { id } = useParams();

  const van = data.find((van) => van.id === id);

  return (
    <>
      <p>Price: {van.imageUrl}</p>
    </>
  );
};

export default HostVanPhotos;
