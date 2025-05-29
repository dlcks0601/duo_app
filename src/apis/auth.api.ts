import { LoginResponse, SignupResponse } from '@/types/auth.type';
import fetcher from '@/utils/fetcher';

export const login = async (email: string, password: string) => {
  const response = await fetcher<LoginResponse>({
    url: '/auth/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  console.log(response.data);
  return response.data;
};

export const signup = async (email: string, password: string) => {
  const response = await fetcher<SignupResponse>({
    url: '/auth/register',
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  return response.data;
};

export const googleLogin = async (code: string) => {
  const response = await fetcher<LoginResponse>({
    url: '/auth/google/callback',
    method: 'POST',
    data: {
      code: code,
    },
  });
  console.log(response.data);
  return response.data;
};
