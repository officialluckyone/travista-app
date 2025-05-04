import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import styles from '../styles';
import { DATA, Destination } from '../data/destinations';
import AppText from '../components/AppText';

export default function ListScreen() {
  const router = useRouter();
  const renderItem = ({ item }: { item: Destination }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.imageCover} resizeMode="cover" />
      <AppText style={styles.subtitle1Bold}>{item.title}</AppText>
      <AppText style={styles.body1}>{item.description}</AppText>
      <AppText style={styles.priceText}>{item.price}</AppText>
      <TouchableOpacity style={[styles.button, styles.buttonSmall]} onPress={() => router.push(`/detail/${item.id}`)}>
        <AppText style={styles.buttonTextBold}>Baca Selengkapnya</AppText>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <AppText style={styles.headline5}>Daftar Destinasi Wisata</AppText>
      <FlatList data={DATA} keyExtractor={(d) => d.id} renderItem={renderItem} />
    </SafeAreaView>
  );
}