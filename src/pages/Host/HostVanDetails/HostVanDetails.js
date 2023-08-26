import { useOutletContext } from "react-router-dom";

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
