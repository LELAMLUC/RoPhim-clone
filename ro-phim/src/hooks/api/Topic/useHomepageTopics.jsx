import { useEffect, useState } from "react";
import * as topicService from "~/services/topicService";

export default function useHomepageTopics() {
  const [data, setData] = useState({ items: [], more: 0 });

  useEffect(() => {
    const fetchTopics = async () => {
      const result = await topicService.getHomepageTopics();
      setData(result || { items: [], more: 0 });
    };
    fetchTopics();
  }, []);

  return data;
}
