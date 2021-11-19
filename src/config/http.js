import axios from "axios";
import { removeStorageItem } from "../config/storage";
import history from "../config/history";

const { REACT_APP_SECRET_API: api } = process.env;

const http = axios.create({
  baseURL: api,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 401:
        removeStorageItem("user")
        return history.push("/login");
      default:
        return Promise.reject(error);
    }
  }
);

export default http;
