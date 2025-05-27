import { LoginResponse, SignupResponse } from '@/types/auth.type';
import fetcher from '@/utils/fetcher';

export const login = async (id: string, password: string) => {
  const response = await fetcher<LoginResponse>({
    url: '/auth/login',
    method: 'POST',
    data: {
      id,
      password,
    },
  });
  console.log(response.data);
  return response.data;
};

export const signup = async (id: string, password: string, role: string) => {
  const response = await fetcher<SignupResponse>({
    url: '/auth/signup',
    method: 'POST',
    data: {
      id,
      password,
      role,
    },
  });
  console.log(response.data);
  return response.data;
};
