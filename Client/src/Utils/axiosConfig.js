import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      try {
        // Call your API to refresh the token
        const { data } = await axios.post("http://localhost:3000/refresh", {
          token: refreshToken,
        });
        localStorage.setItem("access_token", data.accessToken);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + data.accessToken;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
