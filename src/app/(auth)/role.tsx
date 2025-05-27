import { AppText } from '@/components/AppText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RoleScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [role, setRole] = useState('');
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1 items-center mt-4'>
        {/* 헤더 */}
        <View className='flex-row justify-between items-center w-full px-4 relative'>
          {/* 뒤로가기 */}
          <TouchableOpacity
            onPress={() => router.back()}
            className='absolute right-4'
          >
            <EvilIcons
              name='close'
              size={32}
              color={isDark ? 'white' : 'black'}
            />
          </TouchableOpacity>
          {/* 로고 */}
          <View className='flex-col w-full items-center'>
            <View className='flex-col'>
              <AppText className='text-2xl font-logo'>Our</AppText>
              <AppText className='text-2xl font-logo mt-[-12px]'>Own</AppText>
            </View>
          </View>
        </View>

        <View className='flex-col mt-12 items-center'>
          <View className='flex-col items-center gap-3'>
            <Text className={`text-xl ${isDark ? 'text-white' : 'text-black'}`}>
              남자친구에요? 여자친구에요?
            </Text>
            <Text
              className={`text-md ${isDark ? 'text-gray-300' : 'text-gray-400'}`}
            >
              역할을 정해주세요
            </Text>
          </View>
        </View>
        <View className='flex-col justify-center items-center px-4 mt-14'>
          <View className='flex-row items-center gap-4'>
            <TouchableOpacity onPress={() => setRole('남자친구')}>
              <View className='flex-col items-center gap-2'>
                <View
                  className={`border ${
                    role === '남자친구' ? 'border-blue-500' : 'border-gray-500'
                  } px-12 py-6 rounded-lg`}
                >
                  <Text className='text-2xl'>🙎🏻‍♂️</Text>
                </View>
                <Text className='text-md'>남자친구</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRole('여자친구')}>
              <View className='flex-col items-center gap-2'>
                <View
                  className={`border ${
                    role === '여자친구' ? 'border-pink-500' : 'border-gray-500'
                  } px-12 py-6 rounded-lg`}
                >
                  <Text className='text-2xl'>🙎🏻‍♀️</Text>
                </View>
                <Text className='text-md'>여자친구</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          className='absolute bottom-80 right-5'
          onPress={() => {
            if (role.trim()) {
              router.push('/login');
            }
          }}
          disabled={!role.trim()}
        >
          <Entypo
            name='chevron-thin-right'
            size={24}
            color={role.trim() ? (isDark ? 'white' : 'black') : '#919191'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
