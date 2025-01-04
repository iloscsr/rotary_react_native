import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native'; // Image bileşeni eklendi
import { Button, Text } from 'react-native-elements';

export default function AmacScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h4 style={styles.title}>AMACI</Text>
      <Text style={styles.paragraph}>
        Rotary'nin amacı, günlük yaşamda değerli girişimlerin temeli sayılan Hizmet ideali'ni teşvik etmek ve geliştirmek; özellikle de aşağıda belirtilen dört alanda kişileri özendirip, onlara destek vermektir.
      </Text>
      <Text style={styles.paragraph}>
        1. Tanışıklığın bir hizmet fırsatı sayılarak geliştirilmesi;
      </Text>
      <Text style={styles.paragraph}>
        2. İş ve meslek hayatında yüksek ahlak standartlarının teşviki; topluma yararlı iş ve mesleklerin değerinin tanınması ve takdir edilmesi; her üyenin kendi iş ve mesleğini topluma bir hizmet fırsatı sayarak yüceltmesi;
      </Text>
      <Text style={styles.paragraph}>
        3. Her üyenin, Hizmet ideali'ni iş, meslek ve kişisel hayatında uygulaması;
      </Text>
      <Text style={styles.paragraph}>
        4. Hizmet idealinde birleşmiş iş ve meslek sahipleri arasında dünya çapında dostluk ilişkileri kurmak suretiyle, uluslararası toplum hizmeti anlayışının, iyi niyet ve barışın geliştirilmesidir.
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
    textAlign: 'flex-start',
  },
  paragraph: {
    marginBottom: 20,
    textAlign: 'justify',
  },
  image: {
    width: 380, 
    height: 100, // Yüksekliği 100 yerine biraz daha büyük yapıldı
    alignSelf: 'center', 
    marginBottom: 20,
  },
});
