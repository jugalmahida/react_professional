import apiClient from "@/services/ApiClient";

export const authService = {
  login: (credentials) => apiClient.post("/api/user/login", credentials),
  register: (userData) => apiClient.post("/api/user/register", userData),
  logout: () => apiClient.post("/api/user/logout"),
  getCurrentUser: () => apiClient.get("/api/user/me"),
  refreshToken: () => apiClient.post("/api/user/refresh-tokens"),
};
