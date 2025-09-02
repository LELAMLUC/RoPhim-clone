import * as request from "~/apis/configs/httpRequest";

export const getHomepageTopics = async () => {
  try {
    const res = await request.get(`topic/homepageTopics`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTopics = async () => {
  try {
    const res = await request.get(`topic/allTopics`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
