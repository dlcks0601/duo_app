import { AuthState, TokenResponse, User } from '@/types/auth.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      isReady: false,
      user: {
        nickname: '',
        role: '',
      },
      jwt: {
        accessToken: '',
        refreshToken: '',
      },
      logIn: (user: User, jwt: TokenResponse) => {
        set({ isLoggedIn: true, user, jwt });
        router.replace('/(protected)/(tabs)/(home)');
      },
      logOut: () => {
        set({
          isLoggedIn: false,
          user: { nickname: '', role: '' },
          jwt: { accessToken: '', refreshToken: '' },
        });
        router.replace('/(auth)');
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
