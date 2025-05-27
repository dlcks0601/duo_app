import { API_URL } from '@/constants/config';
import axios, { AxiosError } from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// 요청
axiosInstance.interceptors.request.use(
  (config) => {
    // TODO: 토큰이 필요한 경우 여기서 추가
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // TODO: 에러 처리 로직 추가
    // if (error.response?.status === 401) {
    //   // 토큰 만료 처리
    // }
    return Promise.reject(error);
  }
);
