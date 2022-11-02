import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import BookTile from './components/BookTile';

const cartitems = 0;

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topbar}>
        <Text style={styles.title}>Bookshop</Text>
        <View style={styles.cartTile}>
          <Image style={styles.cartImg} source={require('./assets/cart.png')}></Image>
          <Text style={styles.cartCounter}>{cartitems}</Text>
        </View>
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
    marginTop: 40,
    marginHorizontal: 20,
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
  },
  cartTile: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  cartImg: {
    width: 50,
    height: 48,
  },
  cartCounter: {

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
