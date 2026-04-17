import axios, {
  type InternalAxiosRequestConfig,
  AxiosError,
  type AxiosResponse,
} from "axios";

// Flag to prevent multiple refresh calls simultaneously
let isRefreshing = false;
// Queue for failed requests while token is refreshing
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}> = [];

// Helper to process the failed request queue
const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  failedQueue = [];
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api/v1",
  withCredentials: true, // Crucial for sending/receiving HttpOnly refresh cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach Access Token from localStorage
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor: Handle 401 Unauthorized via Refresh Token
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Standard high-end 401 Handling (Token refreshing)
    // IMPORTANT: Only try to refresh if it's NOT a login or register request
    const isAuthPath =
      originalRequest.url?.includes("/auth/login") ||
      originalRequest.url?.includes("/auth/register") ||
      originalRequest.url?.includes("/auth/refresh");

    if (error.response?.status === 401 && !isAuthPath) {
      // If we already retried and failed again, it means even the refresh failed
      if (originalRequest._retry) {
        localStorage.removeItem("accessToken");
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      // Queue concurrent requests while one is refreshing the token
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        // Request a new access token from the backend
        // Backend should receive the refreshToken from the HttpOnly cookie
        const { data } = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true },
        );

        const newAccessToken = data.data.accessToken;

        // Store the new token
        localStorage.setItem("accessToken", newAccessToken);

        // Resume all queued requests
        processQueue(null, newAccessToken);

        // Retry the original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token is likely expired or invalid
        processQueue(refreshError as AxiosError, null);
        localStorage.removeItem("accessToken");

        // Use a simple redirect for now, could be handled better via event emitter
        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Pass through other errors
    return Promise.reject(error);
  },
);
