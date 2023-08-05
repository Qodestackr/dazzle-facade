import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Create a custom Axios instance with default configuration.
 * @param config Additional configuration to be used for the instance.
 * @returns Custom Axios instance.
 */
export function createAxiosInstance(
  config: AxiosRequestConfig = {}
): AxiosInstance {
  return axios.create({
    method: "GET",
    // baseURL: process.env.REACT_APP_BASE_URL,
    // Add other default configuration options here as needed
    ...config,
  });
}

/**
 * Axios instance with default settings.
 * Used for making general API requests.
 */
export const axiosDefaultInstance = createAxiosInstance({});

/**
 * Axios instance for private API requests.
 * Includes authentication token and other necessary headers.
 */
export const axiosPrivateInstance = createAxiosInstance({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * Global response interceptor for error handling.
 */
axiosDefaultInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    // Transform any relevant error data here if needed
    throw error;
  }
);

/**
 * Request interceptor to add an authentication token.
 */
// axiosDefaultInstance.interceptors.request.use((config: AxiosRequestConfig) => {
//   const authToken = "getAuthTokenFromLocalStorage()";

//   if (authToken) {
//     config.headers["Authorization"] = `Bearer ${authToken}`;
//   }

//   return config;
// });
