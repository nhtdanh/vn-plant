import axios, {
  type InternalAxiosRequestConfig,
  AxiosError,
  type AxiosResponse,
} from "axios";

// cờ để ngăn nhiều lệnh gọi làm mới đồng thời
let isRefreshing = false;
// hàng đợi cho các yêu cầu thất bại trong khi token đang làm mới
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}> = [];

// hàm tiện ích để xử lý hàng đợi các yêu cầu thất bại
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
  withCredentials: true, // quan trọng để gửi/nhận cookie làm mới httponly
  headers: {
    "Content-Type": "application/json",
  },
});

// bộ chặn yêu cầu (request interceptor): gắn access token từ localStorage
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

// bộ chặn phản hồi (response interceptor): xử lý lỗi 401 unauthorized qua refresh token
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // xử lý lỗi 401 tiêu chuẩn (làm mới token)
    // quan trọng: chỉ thử làm mới nếu không phải là yêu cầu đăng nhập hoặc đăng ký
    const isAuthPath =
      originalRequest.url?.includes("/auth/login") ||
      originalRequest.url?.includes("/auth/register") ||
      originalRequest.url?.includes("/auth/refresh");

    if (error.response?.status === 401 && !isAuthPath) {
      // nếu đã thử lại và vẫn thất bại, nghĩa là việc làm mới cũng không thành công
      if (originalRequest._retry) {
        localStorage.removeItem("accessToken");
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      // đưa vào hàng đợi các yêu cầu đồng thời trong khi đang làm mới token
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
        // yêu cầu access token mới từ backend
        // backend nhận refresh token từ cookie httponly
        const { data } = await axios.post(
          `${api.defaults.baseURL}/auth/refresh`,
          {},
          { withCredentials: true },
        );

        const newAccessToken = data.data.accessToken;

        // lưu token mới
        localStorage.setItem("accessToken", newAccessToken);

        // tiếp tục các yêu cầu trong hàng đợi
        processQueue(null, newAccessToken);

        // thử lại yêu cầu gốc
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // refresh token có thể đã hết hạn hoặc không hợp lệ
        processQueue(refreshError as AxiosError, null);
        localStorage.removeItem("accessToken");

        // tạm thời sử dụng chuyển hướng đơn giản
        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // chuyển tiếp các lỗi khác
    return Promise.reject(error);
  },
);
