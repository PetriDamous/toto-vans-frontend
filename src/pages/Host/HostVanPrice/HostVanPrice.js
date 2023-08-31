import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => await requireAuth(request);

const HostVanPrice = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Price: {van.price}</p>
    </>
  );
};

export default HostVanPrice;
