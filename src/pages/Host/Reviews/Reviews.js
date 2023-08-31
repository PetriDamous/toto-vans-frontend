import { requireAuth } from "../../../utils";

export const loader = async ({ request }) => await requireAuth(request);

const Reviews = () => {
  return <h1>Reviews</h1>;
};

export default Reviews;
