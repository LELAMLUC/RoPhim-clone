import * as topicService from "~/services/topicService";

export const TopicAPI = {
  getHomepageTopics: async () => {
    const result = await topicService.getHomepageTopics();
    return result || { items: [], more: 0 };
  },

  getAllTopics: async () => {
    const result = await topicService.getAllTopics();
    return result || [];
  },
};
