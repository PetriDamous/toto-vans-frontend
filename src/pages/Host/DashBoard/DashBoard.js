import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => await requireAuth(request);

const DashBoard = () => {
  return <h1>DashBoard</h1>;
};

export default DashBoard;
