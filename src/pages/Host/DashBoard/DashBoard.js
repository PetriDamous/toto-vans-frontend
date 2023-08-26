import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const DashBoard = () => {
  return <h1>DashBoard</h1>;
};

export default DashBoard;
