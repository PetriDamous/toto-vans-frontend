import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const Income = () => {
  return <h1>Income</h1>;
};

export default Income;
