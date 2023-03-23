import { dataServer } from "./axios.config";


export const getServices = () => {
  return new Promise((resolve, reject) => {
    dataServer
      .get("/user/get/services/all", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
