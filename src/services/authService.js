import http from "../config/http";
import { setStorageItem } from "../config/storage";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await http.post("/login", { email, password });
    setStorageItem("user", JSON.stringify(response.data));
    if (response.data.token) {
      http.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    }
    return setResponse(null, response.data);
  } catch (error) {
    console.log('error', error.response)
    return setResponse(error.response, null);
  }
};

function setResponse(error, response) {
  return {
    error,
    response,
  };
}
