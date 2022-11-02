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
      
      <BookTile title="American Psycho" author="Bret Easton Ills" isbn="90-414-0494-5" description="Om zijn oppervlakkige leven nog enige inhoud te geven komt een jongeman tot steeds gruwelijker daden."/>
      <BookTile title="Animal Farm" author="George Orwell" isbn="0-14-012670-8" description="De dieren nemen de macht over op de boerderij. Maar of de omstandigheden daardoor verbeteren, is de vraag. Persiflage op het dictatorschap en de totalitaire staat"/>
      <BookTile title="Industrial Society and it's Future" author="Theodore John Kaczynski" isbn="1-54-450217-6" description="The Unabomber Manifesto: A Brilliant Madman's Essay on Technology, Society, and the Future of Humanity"/>

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
    width: 40,
    height: 38,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
