import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { van } = useOutletContext();

  return (
    <>
      <p>Price: {van.price}</p>
    </>
  );
};

export default HostVanPrice;
