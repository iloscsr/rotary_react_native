import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, Modal, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState(1);

  const handleJoin = () => {
    console.log(`${name} katılacak ve ${participants} kişiyle birlikte katılacak.`);
    setModalVisible(false);
  };

  const navigation = useNavigation();

  const increaseParticipants = () => {
    if (participants < 5) {
      setParticipants(participants + 1);
    }
  };

  const decreaseParticipants = () => {
    if (participants > 1) {
      setParticipants(participants - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>ilayda cosar</Text>
          <Text style={styles.userDetails}>Email: ilos@gmail.com</Text>
          <Text style={styles.userDetails}>Phone: +1 234 567 890</Text>
          <Text style={styles.userDetails}>Address: Teknokent, Corum/Merkez</Text>
        </View>
      </View>

      <View style={styles.announcementSection}>
        <Text style={styles.announcementTitle}>Duyurular</Text>
        <Button title="Duyurular" onPress={() => navigation.navigate('Announcements')} />
      </View>

      <View style={styles.participatorySection}>
        <Text style={styles.announcementTitle}>Katılım Duyuruları</Text>
        <Button title="Katılımli Duyurular" onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Katılım Bilgileri</Text>
            <TextInput
              style={styles.input}
              placeholder="İsminizi Girin"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.modalText}>Kaç kişiyle katılacaksınız?</Text>

            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={decreaseParticipants} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counter}>{participants}</Text>
              <TouchableOpacity onPress={increaseParticipants} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleJoin}>
              <Text style={styles.primaryButtonText}>Katıl</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.secondaryButtonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDetails: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  announcementSection: {
    marginBottom: 20,
  },
  participatorySection: {
    marginBottom: 20,
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  counterButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  primaryButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
  },
  primaryButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  secondaryButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
