import { login } from '@/apis/auth.api';
import { AppText } from '@/components/AppText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRouter } from 'expo-router';
// import { Button } from '@/components/Button';
import { Text, TouchableOpacity, View } from 'react-native';

export default function IndexScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleLogin = async () => {
    const response = await login('test', 'test');
    console.log(response);
  };

  const router = useRouter();

  return (
    <View className='flex-1 justify-center mb-20 px-4'>
      <View className='flex-1 justify-center items-center'>
        <View>
          <AppText className='text-4xl font-logo'>Our</AppText>
          <AppText className='text-4xl font-logo mt-[-11px]'>Own</AppText>
        </View>
      </View>
      {/* <Button title='로그인' theme='secondary' onPress={handleLogin} /> */}
      <TouchableOpacity
        onPress={() => router.push('/login')}
        className={`px-10 py-6 items-center justify-center rounded-md ${isDark ? 'bg-white' : 'bg-black'}`}
      >
        <Text className={isDark ? 'text-black' : 'text-white'}>
          이메일 계정으로 로그인
        </Text>
      </TouchableOpacity>
    </View>
  );
}
