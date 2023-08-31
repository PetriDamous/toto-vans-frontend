import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => await requireAuth(request);

const Income = () => {
  return <h1>Income</h1>;
};

export default Income;
