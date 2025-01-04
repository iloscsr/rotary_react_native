import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Modal, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Input, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function SizScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const handleLogin = () => {
    console.log('Kayıt başarılı:', { name, phone, email });
    setModalVisible(false); // Modal'ı kapat
    navigation.navigate('Profile'); // Profile ekranına yönlendir
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text h4 style={styles.title}>Üyelerimize Özel</Text>
      <Image source={require('./img/6.jpg')} 
      style={styles.image}
        />
        <Text style={styles.paragraph}>
          Bu uygulama üyelerimizin toplantıları takip etmeleri ve diğer üyelerimizle olan iletişimlerini sağlamak için hazırlanmıştır.
        </Text>
        <Button title="Kayıt Ol" onPress={() => setModalVisible(true)} buttonStyle={styles.mainButton} />
      </ScrollView>

      {/* Kayıt Modal'ı */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <Card containerStyle={styles.modalView}>
            <KeyboardAvoidingView behavior="padding">
              <Text h4 style={styles.modalTitle}>Kayıt Ol</Text>
              <Input
                placeholder="Ad Soyad"
                value={name}
                onChangeText={setName}
                leftIcon={{ type: 'font-awesome', name: 'user', color: '#007AFF' }}
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder="Telefon"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                leftIcon={{ type: 'font-awesome', name: 'phone', color: '#007AFF' }}
                containerStyle={styles.inputContainer}
              />
              <Input
                placeholder="E-posta"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#007AFF' }}
                containerStyle={styles.inputContainer}
              />
              <Button
                title="Kaydet"
                onPress={handleLogin}
                buttonStyle={styles.saveButton}
                containerStyle={styles.buttonContainer}
              />
              <Button
                title="Kapat"
                onPress={() => setModalVisible(false)}
                type="outline"
                buttonStyle={styles.closeButton}
                containerStyle={styles.buttonContainer}
              />
            </KeyboardAvoidingView>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  mainButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  closeButton: {
    borderColor: '#007AFF',
  },
  buttonContainer: {
    marginTop: 10,
  },
});
