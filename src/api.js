import data from "./data/data.json";

export async function getVans() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();

      const isError = randomNumber >= 0.5;

      if (isError) {
        return reject({
          message: "Failed to fetch vans",
          statusText: "Bad Request",
          status: 400,
        });
      }

      return resolve(data);
    }, 1000);
  });
}
