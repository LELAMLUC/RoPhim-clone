import { useEffect, useState } from "react";
import { useDebounce } from "~/hooks";
import * as searchService from "~/services/movieService";

export function useSearchMovies(query, delay = 500) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(query, delay);

  useEffect(() => {
    if (!debounced.trim()) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const res = await searchService.search(debounced);
      setResults(res);
      setLoading(false);
    };

    fetchData();
  }, [debounced]);

  return { results, loading };
}
