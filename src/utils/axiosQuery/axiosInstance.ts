import axios from "axios";
import { BaseDir } from "../../baseDir";
import { alert } from "../alert";

export const axiosInstance = axios.create({
  baseURL: `${BaseDir.API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "from interceptor");
    if (error.response.data.message) {
      alert.error(error.response.data.message);
    } else if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 400:
          alert.error("Bad Request. Please check the data you have entered.");
          break;
        case 401:
          alert.error("Unauthorized. Redirecting to login.");
          localStorage.removeItem("access_token");
          break;
        case 403:
          alert.error(
            "Access Forbidden. You do not have permission to access this resource."
          );
          break;
        case 404:
          alert.error(
            "Resource not found. The requested resource could not be found."
          );
          break;
        case 500:
          alert.error("Internal Server Error. Please try again later.");
          break;
        case 502:
          alert.error("Bad Gateway. Please try again later.");
          break;
        case 503:
          alert.error("Service Unavailable. Please try again later.");
          break;
        case 504:
          alert.error("Gateway Timeout. Please try again later.");
          break;
        default:
          alert.error(`An error occurred: ${error.response.statusText}`);
      }
    } else if (error.request) {
      alert.error(
        "No response received from server. Please check your internet connection."
      );
    } else {
      alert.error(`Error in request setup: ${error.message}`);
    }
    return Promise.reject(error);
  }
);
