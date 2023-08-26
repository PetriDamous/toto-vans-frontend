import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const HostVanPhotos = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Price: {van.imageUrl}</p>
    </>
  );
};

export default HostVanPhotos;
