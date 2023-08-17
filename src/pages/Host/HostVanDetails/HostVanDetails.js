import { useOutletContext } from "react-router-dom";

const HostVanDetails = () => {
  const { currentVan } = useOutletContext();

  return (
    <>
      <p>Catergory: {currentVan.type}</p>
      <p>Description: {currentVan.description}</p>
    </>
  );
};

export default HostVanDetails;
