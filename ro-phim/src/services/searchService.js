import * as request from "~/utils/httpRequest";

export const search = async (keyword, limit = 5) => {
  try {
    const res = await request.get(`search`, {
      params: {
        keyword,
        limit,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
