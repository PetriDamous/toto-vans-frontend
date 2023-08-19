import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <>
      <p>Price: {currentVan.imageUrl}</p>
    </>
  );
};

export default HostVanPhotos;
