import 'dotenv/config';

export default {
  expo: {
    name: 'duo_app',
    slug: 'duo_app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'duoapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: ['expo-router'],
    experiments: {
      typedRoutes: true,
    },
    fonts: {
      Pretendard: './assets/fonts/Pretendard-Regular.otf',
      'Pretendard-Thin': './assets/fonts/Pretendard-Thin.otf',
      'Pretendard-ExtraLight': './assets/fonts/Pretendard-ExtraLight.otf',
      'Pretendard-Light': './assets/fonts/Pretendard-Light.otf',
      'Pretendard-Medium': './assets/fonts/Pretendard-Medium.otf',
      'Pretendard-SemiBold': './assets/fonts/Pretendard-SemiBold.otf',
      'Pretendard-Bold': './assets/fonts/Pretendard-Bold.otf',
      'Pretendard-ExtraBold': './assets/fonts/Pretendard-ExtraBold.otf',
      'Pretendard-Black': './assets/fonts/Pretendard-Black.otf',
      SpaceMono: './assets/fonts/SpaceMono-Regular.ttf',
      'ITC Avant Garde Gothic LT Extra Light':
        './assets/fonts/ITCAvantGardeStd-Bk.otf',
    },
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
