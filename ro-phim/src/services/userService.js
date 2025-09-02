import * as request from "~/apis/configs/httpRequest";

export const login = async ({ email, password }) => {
  try {
    const res = await request.post("/user/login", {
      email,
      password,
    });

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const res = await request.post("/user/register", {
      name,
      email,
      password,
    });

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
