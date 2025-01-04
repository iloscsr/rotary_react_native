import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Modal, TouchableOpacity } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default function IletisimScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Modal görünürlüğü için state

  const handleSubmit = () => {
    // Form gönderme işlemi burada yapılacak
    console.log('Form gönderildi:', { email, name, message });
    // Modalı kapat
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text h2 style={styles.title}>İletişim</Text>
        
        {/* İletişim Bilgileri Tablosu */}
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.label}>Adres:</Text>
            <Text style={styles.value}>Ankara Rotary Kulübü, İlkbahar Mah. 598 Sok. 9/9, Güneş Apt. Yıldız, Çankaya, ANKARA</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tel:</Text>
            <Text style={styles.value}>0312 491 41 91</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Faks:</Text>
            <Text style={styles.value}>0312 491 41 97</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.row}>
              <Text style={styles.label}>E-posta:</Text>
              <Text style={styles.value}>info@ankararotary.org</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal İçeriği */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text h4 style={styles.modalTitle}>Mesaj Gönder</Text>
              <Input
                placeholder="Email adresiniz"
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Adınız"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={setName}
                value={name}
              />
              <Input
                placeholder="Mesajınız"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={setMessage}
                value={message}
                multiline
                numberOfLines={4}
              />
              <Button
                title="Gönder"
                onPress={handleSubmit}
                buttonStyle={styles.button}
              />
              <Button
                title="Kapat"
                onPress={() => setModalVisible(false)}
                buttonStyle={styles.buttonClose}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    marginBottom: 20,
    borderColor: '#007bff', // Kenar rengi
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff', // Tablo arka plan rengi
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Sol ve sağda içerikleri yayar
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1, // Satır arasındaki çizgi
    borderBottomColor: '#e0e0e0', // Satır arasındaki çizgi rengi
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1, // Label'in genişliği
  },
  value: {
    fontSize: 16,
    flex: 2, // Değerin genişliği
    textAlign: 'right', // Değer sağda hizalanır
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planın yarı saydam olmasını sağlar
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: '#ff0000', // Kapat butonu için kırmızı
  },
});
