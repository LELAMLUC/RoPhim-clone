import * as request from "~/apis/configs/httpRequest";

export const login = async ({ email, password }) => {
  try {
    const res = await request.post("/auth/login", {
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
    const res = await request.post("/auth/register", {
      name,
      email,
      password,
    });

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
