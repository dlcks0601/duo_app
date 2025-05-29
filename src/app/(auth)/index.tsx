import { AppText } from '@/components/AppText';
import GoogleLoginButton from '@/components/auth/GoogleLoginButton';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleGoogleLogin = () => {};

  return (
    <View className='flex-1 justify-center mb-20 px-4'>
      <View className='flex-1 justify-center items-center'>
        <View>
          <AppText className='text-4xl font-logo'>Our</AppText>
          <AppText className='text-4xl font-logo mt-[-11px]'>Own</AppText>
        </View>
      </View>
      <View className='flex-col gap-4'>
        <GoogleLoginButton onPress={handleGoogleLogin} />
        <Link href='/login' asChild>
          <TouchableOpacity
            className={`px-10 py-6 items-center justify-center rounded-md ${isDark ? 'bg-white' : 'bg-black'}`}
          >
            <Text className={isDark ? 'text-black' : 'text-white'}>
              이메일 계정으로 시작하기
            </Text>
          </TouchableOpacity>
        </Link>
        {/* 카카오 로그인 추가 */}
        {/* <Button
          title='카카오 로그인'
          onPress={() =>
            login()
              .then((result) => {
                console.log('로그인 성공:', result);
                requestAnimationFrame(() => {
                  router.push('/(auth)/login');
                });
              })
              .catch(console.error)
          }
        />
        <Button title={'logout'} onPress={() => logout().then(console.log)} />
        <Button title={'unlink'} onPress={() => unlink().then(console.log)} /> */}
      </View>
    </View>
  );
}
