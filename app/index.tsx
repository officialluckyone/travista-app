import { useEffect } from 'react';
import { useRouter } from 'expo-router';

// Redirect from root to Splash
export default function Index() {
  const router = useRouter();
  useEffect(() => { router.replace('/splash'); }, [router]);
  return null;
}