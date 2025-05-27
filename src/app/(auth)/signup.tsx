import { AppText } from '@/components/AppText';
import AuthInput from '@/components/auth/AuthInput';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignupScreen() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { logIn } = useAuthStore();

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
              {/* 회원가입 폼 */}
              <View className='flex-col w-full mt-10 gap-2'>
                <AuthInput
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
                <AuthInput
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

              {/* 다음 버튼 */}
              <View className='w-full mt-8'>
                {id && password ? (
                  <TouchableOpacity
                    className={`rounded-md py-5 ${isDark ? 'bg-white' : 'bg-black'}`}
                    onPress={() => {
                      Alert.alert('회원가입', '다음 단계로 이동하시겠습니까?', [
                        {
                          text: '취소',
                          style: 'destructive',
                        },
                        {
                          text: '확인',
                          onPress: () => router.push('/nickname'),
                        },
                      ]);
                    }}
                  >
                    <Text
                      className={`${isDark ? 'text-black' : 'text-white'} text-center`}
                    >
                      다음
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    className='rounded-md py-5 bg-gray-300'
                    disabled={true}
                  >
                    <Text className='text-gray-500 text-center'>다음</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
