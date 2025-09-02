import { useEffect, useState } from "react";
import * as topicService from "~/services/topicService";

export default function useTopics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const result = await topicService.getTopics();
      setData(result);
    };
    fetchTopics();
  }, []);

  return data;
}
