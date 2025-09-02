import { useEffect, useState } from "react";
import * as countryService from "~/services/countryService";

export default function useCountries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const result = await countryService.getCountries();
      setData(Array.isArray(result) ? result : []);
    };
    fetchCountries();
  }, []);

  return data;
}
