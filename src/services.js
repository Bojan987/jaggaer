import data from "./resources/data/data.json";

export const getData = (ms) =>
  new Promise((resolve) => setTimeout(resolve(data), ms));
