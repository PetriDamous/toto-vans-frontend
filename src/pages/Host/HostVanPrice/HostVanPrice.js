import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { currentVan } = useOutletContext();

  return (
    <>
      <p>Price: {currentVan.price}</p>
    </>
  );
};

export default HostVanPrice;
