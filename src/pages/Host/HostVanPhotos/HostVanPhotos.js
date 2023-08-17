import { useOutletContext } from "react-router-dom";
import data from "../../../data/data.json";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <>
      <p>Price: {currentVan.imageUrl}</p>
    </>
  );
};

export default HostVanPhotos;
