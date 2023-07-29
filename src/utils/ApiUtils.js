import axios from "axios";

const baseURL = "http://localhost:8000";

export const signUp = async (userData) => {
  try {
    const res = await axios({
      url: `${baseURL}/user/signup`,
      method: "POST",
      data: userData
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const signIn = async (userData) => {
  try {
    const res = await axios({
      url: `${baseURL}/user/signin`,
      method: "POST",
      data: userData
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
