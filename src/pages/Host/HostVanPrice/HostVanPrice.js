import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const HostVanPrice = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Price: {van.price}</p>
    </>
  );
};

export default HostVanPrice;
