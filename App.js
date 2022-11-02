import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import BookTile from './components/BookTile';

const cartitems = 0;

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topbar}>
        <Text style={styles.title}>Bookshop</Text>
        <Image style={styles.cartImg} source={require('./assets/cart.png')}></Image>
        <Text>{cartitems}</Text>
      </View>
      
      <BookTile/>

      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 10,
  },
  topbar: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
  },
  cartImg: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
