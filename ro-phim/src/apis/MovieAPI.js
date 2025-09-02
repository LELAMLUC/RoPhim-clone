import * as movieService from "~/services/movieService";

export const MovieAPI = {
  search: async (query) => {
    if (!query?.trim()) return [];
    try {
      const res = await movieService.search(query);
      return Array.isArray(res) ? res : [];
    } catch (err) {
      console.error("Search movies error:", err);
      return [];
    }
  },
};
