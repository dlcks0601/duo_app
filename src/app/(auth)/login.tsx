import { login } from '@/apis/auth.api';
import { AppText } from '@/components/AppText';
import LoginInput from '@/components/login/LoginInput';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { logIn } = useAuthStore();

  const handleLogin = () => {
    const idTrimmed = id.trim();
    const isIdEmpty = idTrimmed === '';
    const isPasswordEmpty = password === '';

    setIdError(isIdEmpty);
    setPasswordError(isPasswordEmpty);

    if (isIdEmpty || isPasswordEmpty) {
      setError('아이디와 패스워드를 모두 입력해주세요.');
      return;
    }

    setLoading(true);
    setError('');
    login(idTrimmed, password)
      .then(({ user, jwt }) => logIn(user, jwt))
      .then(() => console.log('로그인 성공'))
      .catch((err: any) => {
        console.error(err);
        setError(err.response?.data?.message || err.message || '로그인 실패');
      })
      .finally(() => setLoading(false));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      keyboardVerticalOffset={-200}
      className='flex-1 mt-60'
    >
      <ScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{ marginTop: 60 }}
      >
        <SafeAreaView className='flex-1'>
          <View className='flex-1 justify-center px-8'>
            <View className='flex-col items-center'>
              {/* 로고 */}
              <View>
                <AppText className='text-4xl font-logo'>Our</AppText>
                <AppText className='text-4xl font-logo mt-[-11px]'>Own</AppText>
              </View>
              {/* 로그인 폼 */}
              <View className='flex-col w-full mt-10 gap-2'>
                <LoginInput
                  label='아이디'
                  placeholder='아이디를 입력해주세요.'
                  value={id}
                  onChangeText={(text) => {
                    setId(text);
                    if (text.trim()) setIdError(false);
                  }}
                  keyboardType='default'
                  required
                />
                <LoginInput
                  label='패스워드'
                  placeholder='패스워드를 입력해주세요.'
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (text) setPasswordError(false);
                  }}
                  secureTextEntry
                  required
                />
              </View>

              {/* 로그인 버튼 */}
              <View className='w-full mt-10'>
                <TouchableOpacity
                  className={`rounded-md py-5 ${isDark ? 'bg-white' : 'bg-black'}`}
                  onPress={handleLogin}
                  disabled={loading}
                >
                  <Text
                    className={`${isDark ? 'text-black' : 'text-white'} text-center`}
                  >
                    로그인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
