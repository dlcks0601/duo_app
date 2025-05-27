import GoogleLoginMutation from '@/hooks/querys/auth.query';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, TouchableOpacity, View } from 'react-native';
import GoogleLogo from '../GoogleLogo';

interface GoogleLoginButtonProps {
  onPress: () => void;
}

export default function GoogleLoginButton({ onPress }: GoogleLoginButtonProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { login } = GoogleLoginMutation();

  return (
    <TouchableOpacity
      className={`px-10 py-6 items-center justify-center rounded-md ${isDark ? 'bg-[#000000]' : 'bg-[#ffffff]'} border-[0.5px] ${isDark ? 'border-[#8E918F]' : 'border-[#000000]'}`}
    >
      <View className='flex-row gap-2'>
        <GoogleLogo />
        <Text className={isDark ? 'text-[#E3E3E3]' : 'text-[#1F1F1F]'}>
          구글 계정으로 시작하기
        </Text>
      </View>
    </TouchableOpacity>
  );
}
