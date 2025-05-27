import { googleLogin } from '@/apis/auth.api';
import { useAuthStore } from '@/store/authStore';
import { LoginResponse } from '@/types/auth.type';
import { useMutation } from '@tanstack/react-query';

export default function GoogleLoginMutation() {
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
}
