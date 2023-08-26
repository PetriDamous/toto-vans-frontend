import { requireAuth } from "../../../utils";

export const loader = async () => await requireAuth();

const Reviews = () => {
  return <h1>Reviews</h1>;
};

export default Reviews;
