import { LoginResponse } from '@/types/auth.type';
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
