import data from "./data/data.json";

export async function getVans(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();

      const isError = randomNumber >= 0.5;

      // if (isError) {
      //   return reject({
      //     message: "Failed to fetch vans",
      //     statusText: "Bad Request",
      //     status: 400,
      //   });
      // }

      if (id) {
        return resolve(data.find((van) => van.id === id));
      }

      return resolve(data);
    }, 500);
  });
}
