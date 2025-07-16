import * as request from "~/utils/httpRequest";

export const getGenres = async () => {
  try {
    const res = await request.get(`genres/list`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
