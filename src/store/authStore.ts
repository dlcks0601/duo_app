import { AuthState, TokenResponse, User } from '@/types/auth.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      isReady: false,
      user: {
        nickname: '',
      },
      jwt: {
        accessToken: '',
        refreshToken: '',
      },
      logIn: (user: User, jwt: TokenResponse) => {
        set({ isLoggedIn: true, user, jwt });
      },
      updateNickname: (nickname: string) => {
        set((state) => ({
          user: { ...state.user, nickname },
        }));
      },
      logOut: () => {
        set({
          isLoggedIn: false,
          user: { nickname: '' },
          jwt: { accessToken: '', refreshToken: '' },
        });
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isReady = true;
        }
      },
    }
  )
);
