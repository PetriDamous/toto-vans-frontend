import data from "./data/data.json";
import users from "./data/users.json";

export async function getVans(id) {
  return await new Promise((resolve, reject) => {
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

export async function validateUser({ email, password }) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      const errorMsg = {
        message: "User cannot be found.",
        statusText: "Invalid user.",
        status: 401,
      };

      if (!user) return reject(errorMsg);

      return resolve(user);
    }, 500);
  });
}
