import { useAuthStore } from '@/store/authStore';
import { SplashScreen } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export function AuthProvider({ children }: PropsWithChildren) {
  const { isReady } = useAuthStore();

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return children;
}
