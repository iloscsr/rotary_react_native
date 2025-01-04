import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window'); // Ekran boyutlarını alır

// Import screens
import AmacScreen from './Amac';
import IletisimScreen from './Iletisim';
import KurucuScreen from './Kurucu';
import KurulusScreen from './Kurulus';
import SizScreen from './Siz';
// import AdminScreen from './Admin';
import ProfileScreen from './Profile';

// Enhanced TopBar component
function TopBar({ navigation }) {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomBarItem}>
        <Icon name="person" size={24} color="#007AFF" />
        <Button
          title="Kurucumuz"
          type="clear"
          onPress={() => navigation.navigate('Kurucumuz')}
          titleStyle={styles.bottomBarText}
        />
      </View>
      <View style={styles.bottomBarItem}>
        <Icon name="flag" size={24} color="#007AFF" />
        <Button
          title="Amacımız"
          type="clear"
          onPress={() => navigation.navigate('Amacımız')}
          titleStyle={styles.bottomBarText}
        />
      </View>
      <View style={styles.bottomBarItem}>
        <Icon name="history" size={24} color="#007AFF" />
        <Button
          title="Kuruluşumuz"
          type="clear"
          onPress={() => navigation.navigate('Kuruluşumuz')}
          titleStyle={styles.bottomBarText}
        />
      </View>
      <View style={styles.bottomBarItem}>
        <Icon name="group" size={24} color="#007AFF" />
        <Button
          title="Üyeler"
          type="clear"
          onPress={() => navigation.navigate('Üyeler')}
          titleStyle={styles.bottomBarText}
        />
      </View>
      <View style={styles.bottomBarItem}>
        <Icon name="mail" size={24} color="#007AFF" />
        <Button
          title="İletişim"
          type="clear"
          onPress={() => navigation.navigate('İletişim')}
          titleStyle={styles.bottomBarText}
        />
      </View>
    </View>
  );
}
        
// Home Screen
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./img/logo.jpg')} style={styles.image} />
      <Text h4 style={styles.title}>Özetle Rotary</Text>

      {/* Display images and text content in rows of two */}
      <View style={styles.imageRow}>
        <ImageSection
          imageUrl={require('./img/1.jpg')}
          title="Rotary’nin Tanımı"
          description="Her Rotary kulübü, hizmet idealini kendi kişisel, mesleki ve toplum hayatının 
          doyurucu bir hedefi olarak kabul eden iş ve meslek sahibi kişilerden oluşur."
        />
        <ImageSection
          imageUrl={require('./img/2.jpg')}
          title="Amacı"
          description="Günlük yaşamda değerli girişimlerin temeli sayılan Hizmet ideali’ni teşvik etmek 
          ve geliştirmek; özellikle de aşağıda belirtilen dört alanda kişileri özendirip, onlara destek vermektir."
        />
      </View>
      
      <View style={styles.imageRow}>
        <ImageSection
          imageUrl={require('./img/3.jpg')}
          title="Kuruluşu"
          description="Rotary, genç bir avukat olan Paul Harris ve 3 yakın arkadaşının 23 Şubat 1905 tarihinde 
          yaptıkları toplantıda almış oldukları ortak kararla bir iş adamları kulübü kurmuştur."
        />
        <ImageSection
          imageUrl={require('./img/4.jpg')}
          title="Dörtlü Özdenetim"
          description="Dörtlü özdenetim kuralı, ilk olarak 1932 yılında Herbert J.Taylor tarafından söylenmiştir."
        />
      </View>
      {/* Enhanced TopBar */}
      <TopBar navigation={navigation} />
    </View>
  );
}


// Reusable ImageSection component for displaying images and descriptions
function ImageSection({ imageUrl, title, description }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} style={styles.smallImage} />
      <Text style={styles.imageDescription}>{title}</Text>
      <Text style={styles.paragraph}>{description}</Text>
    </View>
  );
}

// Stack Navigator setup
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator initialRouteName="Ana Sayfa">
          <Stack.Screen
            name="Ana Sayfa"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Kurucumuz" component={KurucuScreen} />
          <Stack.Screen name="Amacımız" component={AmacScreen} />
          <Stack.Screen name="Kuruluşumuz" component={KurulusScreen} />
          <Stack.Screen name="Üyeler" component={SizScreen} />
          <Stack.Screen name="İletişim" component={IletisimScreen} />
          {/* <Stack.Screen name="Admin" component={AdminScreen} /> */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.select({
      android: StatusBar.currentHeight,
      ios: 0,
    }),
  },
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    fontSize: 12,
    color: '#007AFF',
  },
  image: {
    width: 380,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 30, 
    textAlign: 'left',
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    width: '45%',
    marginBottom: 10,
  },
  smallImage: {
    width: '100%',
    height: 80,
    marginBottom: 5,
  },
  imageDescription: {
    textAlign: 'center',
  },
});

export default App;