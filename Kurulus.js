import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native'; // Image bileşeni eklendi
import { Text } from 'react-native-elements';

export default function KurulusScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h4 style={styles.title}>ROTARY'nin KURULUŞU</Text>
      <Text style={styles.paragraph}>
        Rotary, genç bir avukat olan Paul Harris ve 3 yakın arkadaşının 23 Şubat 1905 tarihinde yaptıkları toplantıda almış oldukları ortak kararla, çeşitli iş kollarından seçilen işadamlarının oluşturacağı bir işadamları kulübünü hayata geçirdiler. Bu toplantı aynı zamanda dünyanın ilk gönüllü hizmet kuruluşu olan Rotary'nin de doğuşudur.
      </Text>
      <Image source={require('./img/logo.jpg')} 
      style={styles.image} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
    textAlign: 'flex-start',
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'justify',
  },
  image: {
    width: 380, 
    height: 100, // Yüksekliği 200 olarak ayarlandı
    alignSelf: 'center', 
    marginBottom: 20,
  },
});
