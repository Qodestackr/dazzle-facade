import axios from "axios";
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// default headers

export const axiosDefaultInstance = axios.create({
  method: "GET",
  // baseURL: BASE_URL,
  //   transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  //   transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  //   headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders;

  //   timeout?: Milliseconds;
  //   timeoutErrorMessage?: string;
  //   withCredentials?: boolean;
  //   auth?: AxiosBasicCredentials;
  //   responseType?: ResponseType;
  //   signal?: GenericAbortSignal;
  //   insecureHTTPParser?: boolean;
  //   env?: {
  //     FormData?: new (...args: any[]) => object;
  //   };
  //   formSerializer?: FormSerializerOptions;
});

export const axiosPrivateInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Global request interceptor for error handling
axiosDefaultInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Transform any relevant error data here if needed
    throw error;
  }
);

// Request interceptor to add an authentication token
axiosDefaultInstance.interceptors.request.use((config: any) => {
  const authToken = "getAuthTokenFromLocalStorage()";

  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }

  return config;
});
