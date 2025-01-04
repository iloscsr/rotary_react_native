import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native'; // Image import edildi
import { Button, Text } from 'react-native-elements';

export default function KurucuScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./img/5.jpg')} 
        style={styles.image1} 
      />
      <Text h4 style={styles.title}>Paul Harris - Rotary Kurucusu</Text>
      
      <Text style={styles.paragraph}>
        23 Şubat 1905 tarihinde kurulan ve dünya üzerindeki gönüllü hizmet kuruluşlarının ilki olan Rotary:
      </Text>
      
      <Text style={styles.paragraph}>
        "Yeryüzünde barış ve iyi niyetin kurulmasına yardımcı olmak, bütün mesleklerde yüksek ahlak standartlarını teşvik etmek ve insanlığa hizmet vermek amacıyla bir araya gelen iş ve meslek sahibi kişilerin dünya çapında örgütlendiği bir hizmet kuruluşudur." Rotary'nin hizmet ideali, "Kendinden Önce Hizmet" olarak ifade edilir. Rotary, insanları, yeryüzünün neresinde yaşarlarsa yaşasınlar bu ortak hizmet ülküsü ve amaçları doğrultusunda bir araya getirir.
      </Text>
      
      <Text style={styles.paragraph}>
        Her Rotary kulübü, hizmet idealini kendi kişisel, mesleki ve toplum hayatının doyurucu bir hedefi olarak kabul eden iş ve meslek sahibi kişilerden oluşur. Kulübün her üyesi, farklı bir mesleği temsil eder. Rotary bu yapılanma biçimi ile sorunlar üzerine üretilen düşüncelerin, toplumun her kesimini kavrayabilmesi ve hizmetin toplumun tüm katmanlarına yayılabilmesini amaçlar.
      </Text>
      
      <Text style={styles.paragraph}>
        Her Rotaryenden, kulüpteki çalışmaları dışında, fırsat bulabildiği her yer ve yolda hizmet vermesi beklenir. Rotaryenler, işlerini yalnızca geçimlerini sağladıkları bir araç olarak değil, aynı zamanda diğer insanlara da hizmet vermelerini sağlayacak biçimde düzenlenmeleri için teşvik edilir.
      </Text>
      <Image source={require('./img/logo.jpg')} 
        style={styles.image2} 
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
    textAlign: 'center', // Başlık ortalandı
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'justify', // Metin iki yana yaslandı
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 75, // Resmi yuvarlak yapmak için, yarıçap genişliğin yarısı olmalı
    borderWidth: 4, // Çerçeve genişliği
    borderColor: '#fff', // Beyaz çerçeve rengi
    alignSelf: 'center', // Ortalanmış resim
    marginBottom: 20,
  },
  image2: {
    width: 380, 
    height: 100,
    alignSelf: 'center', 
    marginBottom: 20,
  },
});
