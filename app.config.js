import 'dotenv/config';

export default {
  expo: {
    name: 'ourown',
    slug: 'ourown',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'ourown',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.ourown',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.ourown',
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      [
        'expo-build-properties',
        {
          android: {
            extraMavenRepos: [
              'https://devrepo.kakao.com/nexus/content/groups/public/',
            ],
            newArchEnabled: true,
          },
          ios: {
            newArchEnabled: true,
          },
        },
      ],
      [
        '@react-native-kakao/core',
        {
          nativeAppKey: process.env.KAKAO_NATIVE_APP_KEY,
          android: {
            authCodeHandlerActivity: true,
          },
          ios: {
            handleKakaoOpenUrl: true,
          },
        },
      ],
    ],
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
      KAKAO_NATIVE_APP_KEY: process.env.KAKAO_NATIVE_APP_KEY,
    },
  },
};
