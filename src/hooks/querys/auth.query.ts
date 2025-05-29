import { googleLogin, signup } from '@/apis/auth.api';
import { useAuthStore } from '@/store/authStore';
import { LoginResponse, SignupResponse } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

export const useGoogleLoginMutation = () => {
  const { logIn } = useAuthStore();

  const { mutate } = useMutation({
    mutationFn: (code: string) => googleLogin(code),
    onSuccess: async (data: LoginResponse) => {
      const { user, jwt } = data;
      await logIn(user, jwt);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login: mutate };
};

export const useSignupMutation = () => {
  const { logIn } = useAuthStore();
  const { mutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      signup(data.email, data.password),
    onSuccess: async (data: SignupResponse) => {
      const { user, jwt } = data;
      await logIn(user, jwt);
      router.push('/nickname');
    },
  });

  return { signup: mutate };
};
