import http from "../config/http";
import { setStorageItem } from "../config/storage";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await http.post("/login", { email, password });
    setStorageItem("user", JSON.stringify(response.data));
    http.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
    return setResponse(null, response.data);
  } catch (error) {
    return setResponse(error.response, null);
  }
};

function setResponse(error, response) {
  return {
    error,
    response,
  };
}
