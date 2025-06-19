import * as request from "~/utils/httpRequest";

export const search = async (keyword, limit = 5) => {
  try {
    console.log("🔍 searchService.search() với q:", keyword);

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
