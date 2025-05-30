import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name='home-nested'
        options={{ title: 'HomeNested', headerShown: false }}
      />
    </Stack>
  );
}
