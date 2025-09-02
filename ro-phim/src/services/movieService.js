import * as request from "~/apis/configs/httpRequest";

export const search = async (q, limit = 5) => {
  try {
    const res = await request.get(`movie/filter`, {
      params: {
        q,
        limit,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
