import * as countryService from "~/services/countryService";

export const CountryAPI = {
  getAllCountries: async () => {
    const result = await countryService.getCountries();
    return Array.isArray(result) ? result : [];
  },
};
