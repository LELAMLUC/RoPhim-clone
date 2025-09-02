import * as request from "~/apis/configs/httpRequest";

export const getCountries = async () => {
  try {
    const res = await request.get("country/list");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
