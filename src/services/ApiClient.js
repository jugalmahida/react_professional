import axios from "axios";

const apiClient = axios.create({
  withCredentials: true, // Ensure cookies get sent for auth
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // 15 second timeout
});

// Response interceptor <- currently stuck in loop
// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Handle 401 Unauthorized
//     if (error.response?.status === 401) {
//       originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;

//       if (originalRequest._retryCount > 3) {
//         window.location.href = "/login";
//         return Promise.reject(error);
//       }

//       try {
//         // Try to refresh the token
//         await axios.post(
//           `${API_BASE_URL}/user/refresh-tokens`,
//           {},
//           { withCredentials: true }
//         );

//         // Retry the original request
//         return apiClient(originalRequest);
//       } catch (refreshError) {
//         // Refresh failed, redirect to login
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default apiClient;
