import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import styles from '../styles';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Display splash for 1 second, then navigate to main index
    const timer = setTimeout(() => {
      router.replace('/');
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>      
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 150, height: 150 }}
        accessibilityLabel="App Logo"
      />
    </SafeAreaView>
  );
}