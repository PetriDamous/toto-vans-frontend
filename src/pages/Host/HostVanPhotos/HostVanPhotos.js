import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Price: {van.imageUrl}</p>
    </>
  );
};

export default HostVanPhotos;
