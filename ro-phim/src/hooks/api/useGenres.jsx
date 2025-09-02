import { useEffect, useState } from "react";
import * as genresService from "~/services/genresService";

export default function useGenres() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const result = await genresService.getGenres();
      setData(Array.isArray(result) ? result : []);
    };
    fetchGenres();
  }, []);

  return data;
}
