import { AppText } from '@/components/AppText';
import { View } from 'react-native';

export default function SignInScreen() {
  return (
    <View className='flex-1 justify-center p-4'>
      <AppText className='text-2xl font-bold'>Sign In</AppText>
    </View>
  );
}
