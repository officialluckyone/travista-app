import React from 'react';
import { Image, TouchableOpacity, Linking, Share, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles';
import { DATA } from '../../data/destinations';
import AppText from '../../components/AppText';

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams() as { id: string };
  const item = DATA.find(d => d.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.container}>
        <AppText style={styles.body1}>Destinasi tidak ditemukan.</AppText>
      </SafeAreaView>
    );
  }

  const handleConsult = () => {
    Linking.openURL(
      `https://wa.me/628194017003?text=${encodeURIComponent(
        `Hallo Travista, saya tertarik dengan ${item.title}`
      )}`
    );
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Cek destinasi ${item.title} di Travista.id: https://travista.id/detail/${item.id}`
      });
    } catch (error) {
      console.error('Error sharing', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => router.back()} accessibilityLabel="Kembali">
          <Ionicons name="chevron-back" size={24} color="#5A5A5A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} accessibilityLabel="Bagikan destinasi">
          <Ionicons name="share-outline" size={24} color="#5A5A5A" />
        </TouchableOpacity>
      </View>

      <Image source={item.image} style={[styles.imageCover, { height: 300 }]} resizeMode="cover" />
      <AppText style={styles.headline5Bold}>{item.title}</AppText>
      <AppText style={styles.body1}>{item.fullDescription}</AppText>

      <AppText style={styles.subtitle1Bold}>Durasi Wisata</AppText>
      <AppText style={styles.body1}>{item.duration}</AppText>
      <AppText style={styles.subtitle1Bold}>Akomodasi</AppText>
      <AppText style={styles.body1}>{item.accommodation}</AppText>

      <AppText style={styles.priceText}>{item.price}</AppText>
      <TouchableOpacity style={styles.button} onPress={handleConsult} accessibilityLabel="Konsultasi Gratis">
        <AppText style={styles.buttonTextBold}>Konsultasi Gratis</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}