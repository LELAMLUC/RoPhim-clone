import * as genresService from "~/services/genresService";

export const GenreAPI = {
  getAllGenres: async () => {
    const result = await genresService.getGenres();
    return Array.isArray(result) ? result : [];
  },
};
