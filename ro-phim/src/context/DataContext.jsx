import { createContext, useContext, useEffect, useState } from "react";
import * as genresService from "~/services/genresService";
import * as countryService from "~/services/countryService";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [genreData, countryData] = await Promise.all([
        genresService.getGenres(),
        countryService.getCountries(),
      ]);
      setGenres(genreData);
      setCountries(countryData);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ genres, countries }}>
      {children}
    </DataContext.Provider>
  );
}

export function useAppData() {
  return useContext(DataContext);
}
