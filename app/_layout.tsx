import React from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Layout() {
  // Load the Urbanist font
  const [fontsLoaded] = useFonts({
    Urbanist: require('../assets/fonts/Urbanist.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="index" />
      <Stack.Screen name="detail/[id]" />
    </Stack>
  );
}