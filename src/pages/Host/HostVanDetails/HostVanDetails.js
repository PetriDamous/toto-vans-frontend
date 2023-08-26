import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const HostVanDetails = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Catergory: {van.type}</p>
      <p>Description: {van.description}</p>
    </>
  );
};

export default HostVanDetails;
