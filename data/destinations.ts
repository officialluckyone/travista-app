export type Destination = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string; 
  accommodation: string;  
  price: string;
  image: any;
};

export const DATA: Destination[] = [
  {
    id: '1',
    title: 'Nusa Penida',
    description: 'Pulau eksotis dengan tebing dramatis dan pantai pasir putih.',
    fullDescription: 'Pulau Nusa Penida adalah destinasi eksotis di sebelah tenggara Bali, terkenal dengan Kelingking Beach dan pantai tersembunyi lainnya.',
    duration: '3 hari 2 malam',
    accommodation: 'Hotel Bintang 3, Bus, Tiket Masuk Pantai Kelingking',
    price: 'Rp 3.750.000',
    image: require('../assets/images/nusa_penida.jpg'),
  },
  {
    id: '2',
    title: 'Tanah Lot',
    description: 'Pura laut ikonik di atas batu karang.',
    fullDescription: 'Tanah Lot adalah pura Hindu di atas batu karang, indah saat matahari terbenam.',
    duration: '3 hari 2 malam',
    accommodation: 'Bus, Tiket Masuk Pura',
    price: 'Rp 3.250.000',
    image: require('../assets/images/tanah_lot.jpg'),
  },
  {
    id: '3',
    title: 'Pura Uluwatu',
    description: 'Pura di tebing dengan pemandangan matahari terbenam.',
    fullDescription: 'Pura Uluwatu terletak di tebing 70m di atas laut, terkenal dengan pertunjukan tari Kecak.',
    duration: '3 hari 2 malam',
    accommodation: 'Tiket Masuk, Bus',
    price: 'Rp 3.300.000',
    image: require('../assets/images/uluwatu.jpg'),
  },
  {
    id: '4',
    title: 'Pantai Kuta',
    description: 'Pantai populer untuk surfing dan hiburan malam.',
    fullDescription: 'Pantai Kuta terkenal dengan ombaknya, pusat belanja, dan malam yang meriah.',
    duration: '3 hari 2 malam',
    accommodation: 'Hotel Bintang 3, Bus',
    price: 'Rp 3.180.000',
    image: require('../assets/images/kuta.jpg'),
  },
  {
    id: '5',
    title: 'Gunung Batur',
    description: 'Gunung berapi aktif dengan trekking pagi hari.',
    fullDescription: 'Trekking ke puncak Batur untuk sunrise, diikuti berendam di pemandian air panas.',
    duration: '2 hari 1 malam',
    accommodation: 'Guide, Bus, Pemandian Air Panas',
    price: 'Rp 2.650.000',
    image: require('../assets/images/batur.jpg'),
  },
  {
    id: '6',
    title: 'Bali Safari & Marine Park',
    description: 'Taman safari terbesar di Bali.',
    fullDescription: 'Safari dengan satwa dari Indonesia, India, dan Afrika, plus pertunjukan dan wahana air.',
    duration: '3 hari 2 malam',
    accommodation: 'Tiket Parkir, Safari Tram',
    price: 'Rp 2.850.000',
    image: require('../assets/images/safari.jpg'),
  },
  {
    id: '7',
    title: 'Monkey Forest Ubud',
    description: 'Hutan suci penuh monyet ekor panjang.',
    fullDescription: 'Konservasi hutan dengan pura dan ratusan ekor monyet yang jinak.',
    duration: '2 hari 1 malam',
    accommodation: 'Tiket Masuk, Guide Lokal',
    price: 'Rp 2.450.000',
    image: require('../assets/images/monkey_forest.jpg'),
  },
];