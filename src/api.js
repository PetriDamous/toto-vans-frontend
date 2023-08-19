import data from "./data/data.json";

export async function getVans() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(data);
    }, 3000);
  });
}
